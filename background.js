importScripts("ExtPay.js", "config.js");

const extpay = ExtPay(EXTPAY_EXTENSION_ID);

const TRIAL_MS = TRIAL_DAYS * 24 * 60 * 60 * 1000;
const UPGRADE_PROMPT_COOLDOWN_MS = 15000;
let lastUpgradePromptAt = 0;

async function isEntitled() {
  try {
    const user = await extpay.getUser();
    if (user.paid) return true;
    const installedAt = user.installedAt ? new Date(user.installedAt).getTime() : Date.now();
    return Date.now() - installedAt < TRIAL_MS;
  } catch (err) {
    // Can't reach ExtensionPay (offline, etc.) - don't lock the user out over a network hiccup.
    return true;
  }
}

function promptUpgrade() {
  const now = Date.now();
  if (now - lastUpgradePromptAt < UPGRADE_PROMPT_COOLDOWN_MS) return;
  lastUpgradePromptAt = now;
  chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
}

chrome.commands.onCommand.addListener(async (command) => {
  if (!(await isEntitled())) {
    promptUpgrade();
    return;
  }

  chrome.tabs.query({ url: "*://music.youtube.com/*" }, (tabs) => {
    for (const tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { action: command }).catch(() => {});
    }
  });
});
