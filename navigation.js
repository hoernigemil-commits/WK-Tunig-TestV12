export function initializeNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('site-menu');
  const cartButton = document.getElementById('cart-button');
  const cartPanel = document.getElementById('cart-panel');
  const closeCart = document.getElementById('close-cart');

  if (!menuToggle || !mainMenu || !cartButton || !cartPanel || !closeCart) {
    throw new Error('Navigation oder Warenkorb-Elemente fehlen in den geladenen HTML-Bausteinen.');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menü öffnen' : 'Menü schließen');
    mainMenu.classList.toggle('is-open', !isOpen);
  });

  mainMenu.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;

    mainMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Menü öffnen');
  });

  function setCartOpen(isOpen) {
    cartPanel.classList.toggle('is-open', isOpen);
    cartPanel.setAttribute('aria-hidden', String(!isOpen));
    cartButton.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) closeCart.focus();
  }

  cartButton.addEventListener('click', () => {
    setCartOpen(cartPanel.getAttribute('aria-hidden') === 'true');
  });

  closeCart.addEventListener('click', () => {
    setCartOpen(false);
    cartButton.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && cartPanel.getAttribute('aria-hidden') === 'false') {
      setCartOpen(false);
      cartButton.focus();
    }
  });
}
