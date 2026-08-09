# Privacy Policy — YouTube Music Hotkeys

_Last updated: 2026-08-09_

## What this extension does

YouTube Music Hotkeys lets you control playback on music.youtube.com
using global keyboard shortcuts. To do that, it needs to:

- Read and interact with the page at `music.youtube.com` (click the
  play/pause/next/previous buttons, read and set the volume and
  playback position of the `<video>` element).
- Store a small amount of local data (`chrome.storage`) to remember
  your license/trial status so you aren't asked to pay every time.

## What we collect

We (the developer) do not run any server and do not collect, log, or
sell your browsing activity, listening history, or personal data.

The only personal data involved is what's needed to process payment:

- **Payment processing** is handled entirely by [ExtensionPay](https://extensionpay.com)
  and its payment processor, Stripe. When you purchase a license, you
  provide your email and payment details directly to Stripe via
  ExtensionPay's checkout page — this extension and its developer
  never see or store your card details. ExtensionPay's own privacy
  policy applies to that data: https://extensionpay.com/privacy.html
- Locally, the extension stores whether your license is paid/trialing
  and when it was installed, using `chrome.storage`. This stays on
  your device and is not transmitted anywhere except to ExtensionPay
  to verify your license status.

## Permissions used

| Permission | Why |
|---|---|
| `tabs` | To find open `music.youtube.com` tabs and forward hotkey commands to them. |
| `storage` | To remember your license/trial status locally. |
| Host access to `music.youtube.com` | To run the content script that controls playback. |
| Host access to `extensionpay.com` | Required by the ExtensionPay library to process license/payment status. |

## Contact

Questions or concerns: andras.varsanyi1411@gmail.com
