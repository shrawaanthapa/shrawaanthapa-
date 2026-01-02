/////////// Setup and start typed animation ! //////////
var typed = new Typed(".multiple-text",{
    strings: ["UI UX Designer", "Frontend Developer", " Web Designer", "Graphic Designer", "YouTuber",],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 500,
    loop: true,
});
////////// toogle icon navigation (navbar) //////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
////////// scroll section active link //////////
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    ////////// sticky navigation (navbar) //////////
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    ///// remove toggle icon and navbar when click navbar link (scrool) /////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
////////// Setup and start scroll reveal animation ! //////////
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact-form', { origin: 'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
ScrollReveal().reveal('.services-content, .project-content', { origin: 'top'});
window.addEventListener('resize', slideImage);


// Newsletter form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".footer form");
  const input = form.querySelector("input[type='email']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (validateEmail(email)) {
      alert("✅ Thank you for subscribing!");
      input.value = "";
    } else {
      alert("❌ Please enter a valid email address.");
    }
  });

  // Smooth scroll for footer links
  document.querySelectorAll(".footer ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}