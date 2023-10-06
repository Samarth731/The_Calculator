const numBubbles = 200; // Increase the number of bubbles
const background = document.getElementById('background');

for (let i = 0; i < numBubbles; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${getRandomXPosition()}px`;
  bubble.style.bottom = `${getRandomInitialPosition()}px`;
  bubble.style.animationDuration = `${getRandomAnimationDuration()}s`;
  background.appendChild(bubble);
}

function getRandomXPosition() {
  const maxWidth = window.innerWidth - 20; // Subtract bubble width
  return Math.floor(Math.random() * maxWidth);
}

function getRandomInitialPosition() {
  const maxHeight = window.innerHeight - 20; // Subtract bubble height
  return Math.floor(Math.random() * maxHeight);
}

function getRandomAnimationDuration() {
  return Math.random() * 8 + 4; // Between 4 and 12 seconds
}
