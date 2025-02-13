let scaleFactor = 1;
let words = ["เห็นชัดๆ", "อย่ากวนตีน", "เดะจิ้มตาบอด"];
let wordIndex = 0;

function makeYesBigger() {
    let yesBtn = document.querySelector(".yes-btn");
    let dialog = document.getElementById("dialog");

    scaleFactor += 0.1; 
    yesBtn.style.transform = `scale(${scaleFactor})`; 
    yesBtn.style.transition = "transform 0.2s ease-in-out"; 

    dialog.innerHTML = words[wordIndex];
    
    wordIndex = (wordIndex + 1) % words.length;
}
