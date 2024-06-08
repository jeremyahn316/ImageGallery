const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image_arr = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt_arr = ["Human Eye", "Marble", "Flower", "Egypt", "Butterfly"] 

/* Looping through images */
for (let i = 0; i < image_arr.length; i ++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image_arr[i]);
    newImage.setAttribute('alt', alt_arr[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
