const images = ["background1.jpg","background2.jpg","background3.jpg"];
const background = document.querySelector("#background");

const oneOfImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../BACKGROUND/${oneOfImages}`;

background.appendChild(bgImage);

