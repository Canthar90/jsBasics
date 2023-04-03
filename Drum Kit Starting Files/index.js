

var buttonList = document.querySelectorAll(".drum");
 
for (i=0; i< (buttonList.length); i++){
    buttonList[i].addEventListener("click", handleClick);
} 

//  .addEventListener("click", handleClick);

function handleClick(){
    // alert("I got clicked!");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}