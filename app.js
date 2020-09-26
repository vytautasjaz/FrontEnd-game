const btnRight = document.getElementById('right');
const btnForward = document.getElementById('forward');
const finger = document.getElementById('finger');
const table = document.getElementById('table');

let fingerRotation = 0;
let fingerX = 0;
let fingerY = 0;

// when movement reaches 10 steps, finger stops moving
let movementX = 0;
let movementY = 0;

if (fingerRotation === 0) {
  btnForward.addEventListener('click', () => {
    console.log(fingerRotation);
    fingerX += 32.5;
    movementX += 1;
    finger.style.left = `${fingerX}px`;
  });
} else if (fingerRotation === 90) {
  fingerY += 32.5;
  movementY += 1;
  finger.style.top = `${fingerY}px`;
}

btnRight.addEventListener('click', () => {
  fingerRotation += 90;
  finger.style.transform = `rotate( ${fingerRotation}deg)`;
});

// console.log(fingerPosition);
