const dialog = [
    "let's talk about it_",
    "I'm here for you_",
    "I'm listening_",
    "I'm here to help_",
    "I'm here to_",
    "I'm here_",
    "I'm he_",
];

let Currentindex = 0;
let charIndex = 0;
let typingSpeed = 50;
let isTyping = false; 

function diaring() {
    if (charIndex < dialog[Currentindex].length) {
        document.getElementById("dialog").innerHTML += dialog[Currentindex].charAt(charIndex);
        charIndex++;
        setTimeout(diaring, typingSpeed);
    } else {
        charIndex = 0;
        isTyping = false; 
    }
}

function startTyping() {
    if (!isTyping) {
        isTyping = true; 
        document.getElementById("dialog").innerHTML = ""; 
        diaring();
    }
}

document.querySelector('.dialogBox').addEventListener('click', function() {
    if (!isTyping) {
        Currentindex++;
        if (Currentindex >= dialog.length) {
            Currentindex = 0;
        }
        startTyping();
    }
});

document.querySelector('#dialog').addEventListener('click', function() {
    if (!isTyping) {
        Currentindex++;
        if (Currentindex >= dialog.length) {
            Currentindex = 0;
        }
        startTyping();
    }
});

startTyping();

export default Currentindex;