let fontSize = 100;
let isDark = false;
let isContrast = false;

const pageRoot = document.getElementById('page-root');
const toggleBtn = document.getElementById('acc-toggle');
const panel = document.getElementById('acc-panel');

// Zoom +
function increaseFont() {
  fontSize = Math.min(fontSize + 10, 200);
  pageRoot.style.fontSize = fontSize + '%';
}

// Zoom -
function decreaseFont() {
  fontSize = Math.max(fontSize - 10, 50);
  pageRoot.style.fontSize = fontSize + '%';
}

// Mode sombre
function toggleDarkMode() {
  isDark = !isDark;
  if (isDark) {
    pageRoot.classList.add("darkmode");
    pageRoot.classList.remove("contrast");
    isContrast = false;
  } else {
    pageRoot.classList.remove("darkmode");
  }
}

// Contraste élevé
function toggleContrast() {
  isContrast = !isContrast;
  if (isContrast) {
    pageRoot.classList.add("contrast");
    pageRoot.classList.remove("darkmode");
    isDark = false;
  } else {
    pageRoot.classList.remove("contrast");
  }
}

// Réinitialiser
function resetAccessibility() {
  fontSize = 100;
  isDark = false;
  isContrast = false;
  pageRoot.style.fontSize = '100%';
  pageRoot.classList.remove('darkmode', 'contrast');
  closePanel();
}

// Panel show/hide
function openPanel() {
  panel.classList.remove('hidden');
  toggleBtn.setAttribute('aria-expanded', 'true');
}

function closePanel() {
  panel.classList.add('hidden');
  toggleBtn.setAttribute('aria-expanded', 'false');
}

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closePanel() : openPanel();
});

document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
    closePanel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanel();
});
