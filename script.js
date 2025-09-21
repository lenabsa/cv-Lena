let fontSize = 100;
let highContrast = false;

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

// Contraste (sur tout le contenu de la page)
function toggleContrast() {
  highContrast = !highContrast;
  document.body.classList.toggle("contrast", highContrast);
}

// Réinitialiser
function resetAccessibility() {
  fontSize = 100;
  highContrast = false;
  pageRoot.style.fontSize = '100%';
  pageRoot.classList.remove('contrast');
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
  e.preventDefault(); // sécurité anti-sauts
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closePanel() : openPanel();
});

// Fermer si clic en dehors
document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
    closePanel();
  }
});

// Échap pour fermer
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanel();
});
