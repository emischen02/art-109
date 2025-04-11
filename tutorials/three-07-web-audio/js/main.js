// Get audio and controls
const song = document.getElementById('song');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const volumeSlider = document.getElementById('volume');

// Play song on click
playBtn.addEventListener('click', () => {
  song.play();
});

// Pause song on click
pauseBtn.addEventListener('click', () => {
  song.pause();
});

// Adjust volume
volumeSlider.addEventListener('input', () => {
  song.volume = volumeSlider.value;
});