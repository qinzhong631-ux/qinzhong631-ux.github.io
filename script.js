// No external libraries required. All content is editable in index.html.
(() => {
  const toggle = document.querySelector('#language-toggle');
  const menu = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const translations = document.querySelectorAll('[data-en][data-zh]');
  const year = document.querySelector('#current-year');

  if (year) year.textContent = new Date().getFullYear();

  function setLanguage(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    translations.forEach((node) => {
      // Only textContent is set, so translated strings cannot inject HTML.
      node.textContent = node.dataset[lang];
    });
    toggle.textContent = lang === 'en' ? '中文' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换为英文');
    toggle.title = lang === 'en' ? '切换为中文' : 'Switch to English';
    try { localStorage.setItem('jq-language', lang); } catch (error) { /* Optional preference only. */ }
  }

  let initialLanguage = 'en';
  try { initialLanguage = localStorage.getItem('jq-language') || 'en'; } catch (error) { /* Safe default. */ }
  setLanguage(initialLanguage);
  toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));

  function closeMenu() {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
  }
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-16% 0px -70% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
