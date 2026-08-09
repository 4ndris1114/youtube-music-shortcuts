# YouTube Music Hotkeys

Global keyboard shortcuts for [music.youtube.com](https://music.youtube.com), built with Chrome's `commands` API — these work even when the YouTube Music tab isn't focused (as long as Chrome is running).

## Pricing

Free for a 3-day trial from install, then a one-time purchase unlocks it
permanently. Licensing is handled by [ExtensionPay](https://extensionpay.com)
— click the toolbar icon any time to see trial days remaining or upgrade.

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

## How it works

- `background.js` listens for the Chrome commands, checks license/trial status via ExtensionPay, and forwards allowed commands as messages to any open `music.youtube.com` tab.
- `content.js` handles the messages: play/pause/next/previous click YouTube Music's own player buttons; volume and seeking act directly on the page's `<video>` element.
- `popup.html`/`popup.js` show trial/paid status and the upgrade flow (also opened as a tab when a hotkey is pressed after the trial ends).
- `ExtPay.js` is the vendored [ExtensionPay](https://github.com/Glench/ExtPay) client library (AGPL-3.0-or-later, used unmodified as recommended by its own docs — not hand-written).

## Publishing checklist (Chrome Web Store)

1. **ExtensionPay setup** — register the extension at [extensionpay.com](https://extensionpay.com), connect Stripe, set the one-time price, and make sure the slug matches `EXTPAY_EXTENSION_ID` in [config.js](config.js).
2. **Package** — zip the folder (excluding `.git`, `README.md`, `PRIVACY.md` are fine to include) and upload via the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) (one-time $5 registration fee if you haven't registered before).
3. **Store listing** — description, screenshots (1280x800 or 640x400), and a small promo tile; the icons in `icons/` cover the manifest requirement.
4. **Privacy policy** — host [PRIVACY.md](PRIVACY.md) somewhere public (e.g. GitHub Pages, or just link the raw GitHub file) and paste the URL into the listing's privacy field — required because the extension handles payment-related data.
5. **Review** — submit for review; first review is typically 1-3 business days.
