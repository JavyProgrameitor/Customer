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

// Cambia el color de fondo de la camiseta
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

// Cambia la imagen seleccionada en la camiseta
function selectImage(imageSrc) {
  imageOverlaySmall.style.backgroundImage = `url('${imageSrc}')`;
  imageOverlay.style.backgroundImage = `url('${imageSrc}')`;

  const selectedImage = event.target;
  // Obtiene el nombre del personaje desde el atributo 'value'
  const imageName = selectedImage.getAttribute("value");
  
  // Muestra el nombre del personaje en el elemento 'name-person'
  namePersonElement.textContent = imageName;

}

// Actualiza el título en la camiseta al escribir en el input
titleInput.addEventListener("input", function () {
  titleElement.textContent = titleInput.value;
});

// Actualiza la posición del título usando los sliders
sliderX.addEventListener("input", function () {
  titleElement.style.left = `${sliderX.value}%`;
});

sliderY.addEventListener("input", function () {
  titleElement.style.top = `${sliderY.value}%`;
});