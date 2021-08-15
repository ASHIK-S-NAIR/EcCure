
window.addEventListener("load", function(){
    // page-loader start
    setTimeout(function(){
        document.querySelector(".page-loader").style.display = "none";
    },800);
    // page-loader end

    // animate on scroll start
    AOS.init();
    // animate on scroll end
})



// nav-toggler start
const navToggle = document.querySelector(".nav-toggle");
const navigationSection = document.querySelector(".navigation-section");

navToggle.addEventListener('click', Toggler);

function Toggler(){
    navigationSection.classList.toggle('open');
    navToggle.classList.toggle('active');
}
// nav-toggler end


// nav-select start
document.addEventListener('click', (e)=>{
    if(e.target.closest('.navigation-li')){
        Select();
    }
})

document.addEventListener('click', (e)=> {
    if(e.target.closest('.navigation-social-a')){
        Select();
    }
})

function Select(){
    navigationSection.classList.toggle('open');
    navToggle.classList.toggle('active');
}
// nav-select end