const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  const isExpanded = navLinks.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Optional: Închide meniul când se dă click pe un link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

//Animatii

const cardtitles = document.querySelectorAll('.skillcard');

if (cardtitles.length > 0) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.02
    });

    cardtitles.forEach(title => {
        observer.observe(title);
    });

} else {
    console.warn("Intersection Observer: No elements found with the class '.cardtitle'. Animation will not work.");
}