let fontSize = 100;
const pageRoot = document.getElementById('page-root');

function increaseFont() {
  fontSize += 10;
  pageRoot.style.fontSize = fontSize + "%";
}

function decreaseFont() {
  fontSize -= 10;
  pageRoot.style.fontSize = fontSize + "%";
}