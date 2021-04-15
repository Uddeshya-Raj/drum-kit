var buttons = document.querySelectorAll(".set button");
var keyCodeArray = [];
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    var audioFileName;
    switch (this.textContent) {
      case "w":
        audioFileName = "tom-1";
        break;
      case "a":
        audioFileName = "tom-2";
        break;
      case "s":
        audioFileName = "tom-3";
        break;
      case "d":
        audioFileName = "tom-4";
        break;
      case "j":
        audioFileName = "snare";
        break;
      case "k":
        audioFileName = "crash";
        break;
      case "l":
        audioFileName = "kick-bass";
        break;
      default:

    }
    var audio = new Audio("sounds/" + audioFileName + ".mp3");
    audio.play();
    buttonAnimation(event.target.textContent);
  });
  keyCodeArray[i] = parseInt(buttons[i].textContent.toUpperCase().charCodeAt(0));
}
document.addEventListener('keydown', function(event) {
  for (i = 0; i < keyCodeArray.length; i++) {
    if (event.keyCode === keyCodeArray[i]) buttons[i].click();
  }
});

function buttonAnimation(key) {
  var currentKey = document.querySelector("."+key);
  currentKey.classList.add("pressed");
  setTimeout(function(){currentKey.classList.remove("pressed");},100);
}
