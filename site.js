/* QVYX 3D Studio — shared mobile navigation and footer year. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');

  const closeMenu = () => {
    if (!toggle || !menu) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('menu-open');
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
      menu.hidden = isOpen;
      document.body.classList.toggle('menu-open', !isOpen);
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 780) closeMenu();
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
