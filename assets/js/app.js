const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.getElementById("rotats").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
$('.slider-content').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
});
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};