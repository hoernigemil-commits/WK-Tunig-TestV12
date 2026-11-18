import { loadPartials } from './load-partials.js';
import { initializeNavigation } from './navigation.js';
import { initializeSearch } from './search.js';

async function initializeSite() {
  await loadPartials();
  initializeNavigation();
  initializeSearch();
}

initializeSite().catch((error) => {
  console.error('Die Website konnte nicht vollständig geladen werden.', error);
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <section class="content-width catalog-empty" role="alert">
        <h1>Die Seite konnte nicht vollständig geladen werden.</h1>
        <p>Bitte öffne die Website über den lokalen Vorschau-Server und lade sie erneut.</p>
      </section>
    `;
  }
});
