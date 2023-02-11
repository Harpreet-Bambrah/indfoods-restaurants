
// on scroll header-shadow

window.onscroll = function () {
    myFunction(event);
};

function myFunction(event) {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("header").style.boxShadow = "-5px 5px 15px -2px #E90E16";
    } else {
        document.getElementById("header").style.boxShadow='none'
    }
    console.log(event.target.defaultView.innerWidth);
    console.log(event);
}