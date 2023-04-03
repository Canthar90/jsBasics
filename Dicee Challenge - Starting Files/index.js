var randDiceNrLeft = Math.random() * 6 + 1;
var randDiceNrRight = Math.random() * 6 + 1;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );

    // changing image upon page refresh 
    randDiceNrLeft = Math.floor(randDiceNrLeft)
    document.querySelector(".img1").setAttribute("src", "images/dice" + randDiceNrLeft + ".png");

    randDiceNrRight = Math.floor(randDiceNrRight);
    document.querySelector(".img2").setAttribute("src", "images/dice" + randDiceNrRight + ".png");

    // checking the score
    if (randDiceNrLeft === randDiceNrRight){
        document.querySelector("h1").textContent = "Draw!";
    }else if (randDiceNrLeft > randDiceNrRight){
        document.querySelector("h1").textContent = "🚩 Left Player wins!!";
    }else {
        document.querySelector("h1").textContent = "Right Player wins!! 🚩";
    }

    // updating random numbers
    randDiceNrLeft = Math.random() * 6 + 1;
    randDiceNrRight = Math.random() * 6 + 1;
}

