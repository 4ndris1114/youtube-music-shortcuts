# YouTube Music Hotkeys

Global keyboard shortcuts for [music.youtube.com](https://music.youtube.com), built with Chrome's `commands` API — these work even when the YouTube Music tab isn't focused (as long as Chrome is running).

## Install (unpacked)

1. Open `chrome://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked** and select this folder
4. Open `chrome://extensions/shortcuts` to review/set the key bindings

## Default shortcuts

| Action | Default key |
|---|---|
| Play/Pause | Media Play/Pause key (if your keyboard has one) |
| Next track | Media Next Track key |
| Previous track | Media Previous Track key |
| Volume up | `Ctrl+Shift+Up` |
| Volume down | `Ctrl+Shift+Down` |
| Seek forward 10s | `Ctrl+Shift+Right` |
| Seek back 10s | `Ctrl+Shift+Left` |

**Note:** Chrome only auto-activates the first 4 suggested shortcuts it sees; the rest show up unassigned in `chrome://extensions/shortcuts` and need a manual key set there. If a media key doesn't exist on your keyboard, or a shortcut conflicts with something else, rebind it on that page — bindings are per-user, not baked into the extension.

## How it works

- `background.js` listens for the Chrome commands and forwards them as messages to any open `music.youtube.com` tab.
- `content.js` handles the messages: play/pause/next/previous click YouTube Music's own player buttons; volume and seeking act directly on the page's `<video>` element.
