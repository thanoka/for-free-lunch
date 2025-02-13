const dialog = [
    "เอาหล่ะๆ สวัสดีครับ คุณแฟน Happy valentine's day ครับผม_",
    "ไม่ได้ให้ของขวัญแฟนมานานเลย เกือบปีเลยมั้ง เพราะงั้นของขวัญครั้งนี้เลยตั้งใจทำมากๆเลย_",
    "แต่จะให้ของขวัญไปเลยง่ายๆ มันก็จะจบไว้เกินงั้นมาเล่นเกมกันดีกว่า เห็นตัวนับมุมขวาล่างไหม ที่ตอนนี้มันเป็นสีแดงเรื่องแสงอยู่_",
    "ถ้าเห็นแล้วก็มาเล่นเกม กันถ้ามันถึงสิบเมิ่่อไหร่ค่อยรับของขวัญของแฟนไป",
    "เอาละๆมาเริ่มกันเลยคำถามอาจจะยากหน่อยแต่เป็นเรื่องเกี่ยวกับเราแน่นอน ตั้งใจให้ยากแหละจะได้เล่นนานๆหน่อยฮี่ๆๆๆๆ 😁; 😁;",
    "I'm here_",
    "I'm he_",
];

let Currentindex = 4;
let charIndex = 0;
let typingSpeed = 10;
let isTyping = false;
let block = false;

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

export function startTyping() {
    if (!isTyping) {
        isTyping = true;
        document.getElementById("dialog").innerHTML = "";
        diaring();
    }
}

function setCurrentindex(value) {
    Currentindex = value;
    document.dispatchEvent(new CustomEvent('CurrentindexChanged', { detail: Currentindex }));
}

export function next() {
    if (isTyping || block) return;
    setCurrentindex((Currentindex + 1) % dialog.length);
    startTyping();
}

export function setBlock(value) {
    block = value;
}

document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.querySelector('.dialogBox');
    if (dialogBox) {
        dialogBox.addEventListener('click', next);
    }
});

startTyping();

window.setBlock = setBlock;
window.next = next;
export { Currentindex};
