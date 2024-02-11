for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);



  });
}

addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


makeSound = (key) => {
  switch (key) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("sounds/snare.mp3");
      break;
    case "k":
      playAudio("sounds/crash.mp3");
      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      break;
    default:
      
  }
}
playAudio = (scrFile) => {
  let audio = new Audio(scrFile);
  audio.play();
}

buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(()=>{
    activeButton.classList.remove("pressed");

  },100)
}