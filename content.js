const VOLUME_STEP = 0.1;
const SEEK_STEP_SECONDS = 10;

function getVideo() {
  return document.querySelector("video");
}

function clickFirst(selectors) {
  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (el) {
      el.click();
      return true;
    }
  }
  return false;
}

function changeVolume(delta) {
  const video = getVideo();
  if (!video) return;
  video.volume = Math.min(1, Math.max(0, video.volume + delta));
}

function seek(deltaSeconds) {
  const video = getVideo();
  if (!video) return;
  video.currentTime = Math.max(
    0,
    Math.min(video.duration || Infinity, video.currentTime + deltaSeconds)
  );
}

const actions = {
  "play-pause": () =>
    clickFirst(["#play-pause-button", "[aria-label='Play']", "[aria-label='Pause']"]),
  "next-track": () => clickFirst(["#next-button", ".next-button", "[aria-label='Next song']"]),
  "previous-track": () =>
    clickFirst(["#previous-button", ".previous-button", "[aria-label='Previous song']"]),
  "volume-up": () => changeVolume(VOLUME_STEP),
  "volume-down": () => changeVolume(-VOLUME_STEP),
  "seek-forward": () => seek(SEEK_STEP_SECONDS),
  "seek-back": () => seek(-SEEK_STEP_SECONDS),
};

chrome.runtime.onMessage.addListener((message) => {
  const action = actions[message.action];
  if (action) action();
});
