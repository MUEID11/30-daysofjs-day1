"use strict";
function playSound() {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all togather
    audio.currentTime = 0; //rewind to start
    audio.play();
    
    key.classList.add("playing");
}
function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skiping if it's not a transform
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
