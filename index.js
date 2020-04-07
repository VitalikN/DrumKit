//detecting button press
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
        });
}
//detenting key press
    addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    });
    //make sound
    function makeSound(key){
      switch(key){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        default: console.log(this.innerHTML);
      }
    }
    function buttonAnimation(currentKey){
     var activeBottom = document.querySelector("."+currentKey);

     activeBottom.classList.add("pressed");
     setTimeout(function(){
       activeBottom.classList.remove("pressed");
     },100);


    }
