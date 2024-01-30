const sections = document.querySelectorAll('main section');

document.addEventListener('wheel', (e) => {
  e.preventDefault();

  const delta = e.deltaY < 0 ? 1 : -1;
  const currentSectionIndex = Array.from(sections).indexOf(document.scrollingElement.scrollTop !== 0 ? document.scrollingElement : sections[0]);
  const nextSectionIndex = (currentSectionIndex + delta + sections.length) % sections.length;

  sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
});