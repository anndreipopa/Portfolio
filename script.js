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
const container = document.querySelectorAll('.skillcard');

if (container.length > 0) {
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

    container.forEach(title => {
        observer.observe(title);
    });

}

// script pt project section

document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {


    card.addEventListener('click', function(event) {

      if (this.classList.contains('is-active')) {

        const detailsSection = this.querySelector('.project-details');
        if (detailsSection && detailsSection.contains(event.target) && event.target.closest('a')) {
          return; 
        }
      }
      this.classList.toggle('is-active');
    });
  });

  document.addEventListener('click', function(event) {
    projectCards.forEach(card => {
      if (card.classList.contains('is-active') && !card.contains(event.target)) {
        card.classList.remove('is-active');
      }
    });
  });
});