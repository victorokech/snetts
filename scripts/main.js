var myButton = document.querySelector(".hamburger");
var myIcon = document.querySelector("#btn-icon");

function closeFunction() {
    var myIcon = document.querySelector("#btn-icon");
    var theMenu = document.querySelector(".menu");

    myIcon.classList.toggle('icon-close');
    myIcon.classList.toggle('icon-menu');

    if(myIcon.classList.contains("icon-menu")) {
        theMenu.classList.add("hidden");
    } else {
        theMenu.classList.remove("hidden");
    }
}
myButton.addEventListener('click', closeFunction);

function changeImage() {
    var profilePhoto = document.querySelector(".profile");
    var mySrc = profilePhoto.getAttribute('src');

    if(mySrc === 'images/profile.jpg') {
        profilePhoto.setAttribute ('src','images/profile-black.jpg');
    } else {
        profilePhoto.setAttribute ('src','images/profile.jpg');
    }
}