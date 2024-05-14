// scrollReveal
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
//  });

// ScrollReveal().reveal('.home-content .heading', { origin: 'top' });

// scrollReveal
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact ', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

 // toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    // menuIcon.classList.toggle('x');
    navbar.classList.toggle('active');
}


// scrol section active link
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        };
    });
    navbar.classList.remove('active');
};


//  typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Développeur REACT', 'Développeur ExpressJS', 'Développeur Symfony', 'Développeur React Native'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})