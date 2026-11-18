export async function loadPartials() {
  const slots = [...document.querySelectorAll('[data-include]')];

  await Promise.all(
    slots.map(async (slot) => {
      const path = slot.dataset.include;
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`HTML-Baustein "${path}" konnte nicht geladen werden (${response.status}).`);
      }

      slot.outerHTML = await response.text();
    }),
  );
}
