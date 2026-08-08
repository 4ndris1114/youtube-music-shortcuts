# YouTube Music Hotkeys

Global keyboard shortcuts for [music.youtube.com](https://music.youtube.com), built with Chrome's `commands` API — these work even when the YouTube Music tab isn't focused (as long as Chrome is running).

## Install (unpacked)
0. Clone the repository OR download it as zip & unzip to see folder contents
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
Additionally, to be able to use these shortcuts while having another application in focus (than Chrome), set 'In Chrome' to 'Global' at the shortcut settings.
