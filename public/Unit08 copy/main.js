function toggleMenue() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}
let i = 0;
let images = [];
let time = 3000;

// images list
images[0] = images / news0.jpg;
images[2] = /images/news1.jpg;
images[3] = /images/news2.jpg;

// change images
function changeImage() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;
