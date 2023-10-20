let drums = document.querySelectorAll(".drum");
let audio = new Audio("./sounds/tom-1.mp3");


function playInstrument(key) {
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            buttonAnimation(key)
            audio.play();
            break
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            buttonAnimation(key)
            audio.play();
            break
        default:
            break
    }
}

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        let key = this.innerHTML;
        playInstrument(key);
        
    });
}   

document.addEventListener("keydown", function(e) {
    playInstrument(e.key);
});

function buttonAnimation(key) {
    let button = document.querySelector("." + key);
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}