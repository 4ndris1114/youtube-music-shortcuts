chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ url: "*://music.youtube.com/*" }, (tabs) => {
    for (const tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { action: command }).catch(() => {});
    }
  });
});
