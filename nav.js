  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Menü schließen wenn ein Link geklickt wird
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });