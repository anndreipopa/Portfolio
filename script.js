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

/*const container1 = document.querySelectorAll('.projectcard');

if (container1.length > 0) {
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

    container1.forEach(title => {
        observer.observe(title);
    });

} */