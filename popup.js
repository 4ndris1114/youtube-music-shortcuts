const extpay = ExtPay(EXTPAY_EXTENSION_ID);
const TRIAL_MS = TRIAL_DAYS * 24 * 60 * 60 * 1000;

const statusEl = document.getElementById("status");
const actionBtn = document.getElementById("action-btn");

function render(user) {
  if (user.paid) {
    statusEl.textContent = "✓ Pro unlocked — thanks for the support!";
    statusEl.className = "status paid";
    actionBtn.style.display = "none";
    return;
  }

  const installedAt = user.installedAt ? new Date(user.installedAt).getTime() : Date.now();
  const msLeft = TRIAL_MS - (Date.now() - installedAt);

  if (msLeft > 0) {
    const daysLeft = Math.max(1, Math.ceil(msLeft / (24 * 60 * 60 * 1000)));
    statusEl.textContent = `Free trial — ${daysLeft} day${daysLeft === 1 ? "" : "s"} left`;
    statusEl.className = "status trial";
  } else {
    statusEl.textContent = "Your free trial has ended.";
    statusEl.className = "status expired";
  }

  actionBtn.textContent = "Upgrade now";
  actionBtn.style.display = "block";
  actionBtn.onclick = () => extpay.openPaymentPage();
}

extpay
  .getUser()
  .then(render)
  .catch(() => {
    statusEl.textContent = "Couldn't reach the license server. Shortcuts still work for now.";
    statusEl.className = "status trial";
  });

extpay.onPaid.addListener(render);
