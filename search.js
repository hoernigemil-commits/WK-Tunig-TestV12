export function initializeSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('site-search');
  const searchNotice = document.getElementById('search-notice');

  if (!searchForm || !searchInput || !searchNotice) {
    throw new Error('Suchformular oder Suchhinweis fehlt in den geladenen HTML-Bausteinen.');
  }

  let noticeTimer;

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchNotice.textContent = searchInput.value.trim()
      ? 'Der Produktkatalog ist noch leer. Produkte folgen.'
      : 'Bitte gib einen Suchbegriff ein. Der Produktkatalog ist noch leer.';
    searchNotice.classList.add('is-visible');
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      searchNotice.classList.remove('is-visible');
    }, 3500);
  });
}
