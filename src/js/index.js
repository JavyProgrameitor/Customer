const titleInput = document.getElementById("shirt-title");
const titleElement = document.getElementById("title");
const sliderX = document.getElementById("slider-x");
const sliderY = document.getElementById("slider-y");

const imageOverlaySmall = document.getElementById('image-overlay-small');
const imageOverlay = document.getElementById('image-overlay');

const namePersonElement = document.getElementById("name-person");

const shirtBackground = document.getElementById('shirt-background');

shirtBackground.style.backgroundImage = "url('./src/img/shirt-black-fs.png')";
titleElement.style.color = "white";
namePersonElement.style.color = "white";

// Input title
titleInput.addEventListener("input", function () {
  titleElement.textContent = titleInput.value;
});

// Method that changes the color of the shirt and applies direct styles to the letters
function changeShirtColor(color) {
  if (color === 'black') {
    shirtBackground.style.backgroundImage = "url('./src/img/shirt-black-fs.png')";
    titleElement.style.color = "white";
    titleElement.style.fontWeight = "bold"
    namePersonElement.style.color = "white";
  } else if (color === 'white') {
      shirtBackground.style.backgroundImage = "url('./src/img/white-shirt-fs.png')";
      titleElement.style.color = "black";
       titleElement.style.fontWeight = "bold"
      namePersonElement.style.color = "black";
  }
}

function selectImage(imageSrc, imageName) {
  imageOverlaySmall.style.backgroundImage = `url('${imageSrc}')`;
  imageOverlay.style.backgroundImage = `url('${imageSrc}')`;
  namePersonElement.textContent = imageName;
}

// Function click
function imageClick(event) {
  let imageSrc = event.target.src;
  let imageName = event.target.getAttribute("value");
  selectImage(imageSrc, imageName);
}

// Functions drag-drop
// event dragstart
function dragStart(event) {
  event.dataTransfer.setData('imageSrc', event.target.src);
  event.dataTransfer.setData('imageName', event.target.getAttribute("value"));
}
// event dragover
shirtBackground.addEventListener('dragover', (event) => {
  event.preventDefault(); 
});
// event drop
shirtBackground.addEventListener('drop', (event) => {
  event.preventDefault();
  let imageSrc = event.dataTransfer.getData('imageSrc');
  let imageName = event.dataTransfer.getData('imageName');
  selectImage(imageSrc, imageName);
});

document.querySelectorAll('.image-list img').forEach(img => {
  img.addEventListener('click', imageClick);
  img.addEventListener('dragstart', dragStart);
});

// Update the sliders
let maxHorizontal = 20;
let maxVertical = 20;

titleElement.style.position = 'absolute';
titleElement.style.left = '130px';
titleElement.style.top = '150px';
titleElement.style.transform = 'translate(-50%, -50%)';

sliderX.addEventListener("input", function () {
  let moveX = (sliderX.value -50) * (maxHorizontal /50);
  titleElement.style.left = `${130 + moveX}px`;

});
sliderY.addEventListener("input", function () {
  let moveY = (sliderY.value - 50) * (maxVertical / 50);
  titleElement.style.top = `${150 + moveY}px`;

});
