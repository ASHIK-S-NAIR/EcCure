const navToggle = document.querySelector(".nav-toggle");
const navigationSection = document.querySelector(".navigation-section");

navToggle.addEventListener('click', Toggler);

function Toggler(){
    navigationSection.classList.toggle('open');
    navToggle.classList.toggle('active');

}