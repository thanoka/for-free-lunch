const dialog = [
    "เอาหล่ะๆ สวัสดีครับ คุณแฟน Happy valentine's day ครับผม_",
    "ไม่ได้ให้ของขวัญแฟนมานานเลย เกือบปีเลยมั้ง เพราะงั้นของขวัญครั้งนี้เลยตั้งใจทำมากๆเลย_",
    "แต่จะให้ของขวัญไปเลยง่ายๆ มันก็จะจบไว้เกินงั้นมาเล่นเกมกันดีกว่า เห็นตัวนับมุมขวาล่างไหม ที่ตอนนี้มันเป็นสีแดงเรื่องแสงอยู่_",
    "ถ้าเห็นแล้วก็มาเล่นเกม กันถ้ามันถึงเจ็ดเมิ่่อไหร่ค่อยรับของขวัญของแฟนไป ใบ้ก่อนว่าภาษา ของคำตอบไม่แน่นอน เพราะงั้นอ่านคำใบ้ดีๆ",
    "เอาละๆมาเริ่มกันเลยคำถามอาจจะยากหน่อยแต่เป็นเรื่องเกี่ยวกับเราแน่นอน ตั้งใจให้ยากแหละจะได้เล่นนานๆหน่อยฮี่ๆๆๆๆ 😁; 😁;",
    "ข้อที่ 1 | จำชุดคลุมชุดแรกที่เค้าใส่ได้ไหม ถ้าถามว่ามันคืออะไรก็คงง่ายไปใช่ไหมล่ะ งั้น เอาเป็นคำถามเชิงคิดวิเคราะห์ละกัน ",
    `ถ้าถามว่าอาณาจักรข้าคืออะไรมันก็คงง่ายสำหรับเจ้า งั้นเอาเป็นว่า "ตัวแรกของครอบครัวข้าชอบนำหน้ามั้นคงเสมอ-ผลรวมของลำดับที่ยืนในกลุ่มเอาฟาของมหาอำนาจ"`,
    "เย้ๆแฟนเก่งมากๆๆ ตอบถูกได้ไงเนี้ยเหลือจาเชื่อๆๆๆๆ งั้นไปเริ่มคำถามข้อถัดไปกันเลย",
    "ข้อที่ 2 | ข้อนี้เอาสบายๆข้อแรกยากมากๆเลยเค้าว่า งั้นเอาเป็น เธอจำดอกไม้ DIY ชิ้นแรกที่เธอให้เค้าได้ไหม",
    "ตัวข้าได้รับพรจากเทพกรีกทั้ง 3 องค์, ผู้มอบชีวิต , ผู้มอบคุณลักษณ์ , ผู้มอบชื่อ และพวกท่านนั้นเกรียงไกรหาได้ตัวจ๊อยไม่ และจงจำไว้ว่าให้เคารพถิ่นกำเนืดท่าน",
    "เก่งอีกแนะ  Aphrodite นี่เจ๋งมากเลยน้าๆ รักเด่วใจเด่ว เอาแหละๆ ไปกันต่อเล้ยยย",
    "ข้อที่ 3 | อันนี้ง่ายมากๆ จำเบอร์เค้าได้ป่าวว ต่อไปต้องใช้น้าา",
    "เดินมาท่องเธอให่เต้าฟังเดะให่ตำตอบหรือไม่ก็ลองแฮ็กระบบนี้ดู",
    "เห้ยๆผ่านมาได่ไงเค้าไม้รู้เลยว่าแฟนจะใช้วิธีไหน แต่เอาเป็นว่า่ผ่านมาแนะ ไปข้อถัดไปเลยยย",
    "ข้อที่ 4 | จำอาหารมื้อแรกที่เค้าทำให้เธอกินได้มะ ฮี่ๆๆ คำถามมันจะยากแค่ไหนกันน้าจากอีแค่อาหาร",
    "ยุคที่ข้าเกิดนั้น ได้เกิดการเปลี่ยนแปลงขึ้นมากมาย ทั้งการขนส่งการปกครองและค่านิยม แต่สิ่งที่ฆ่าเสียใจคือผู้รับใช้นั้นเสื่อมถอย | ผู้รับใช้คือใคร",
    "เก่งมากๆๆๆ เอาดาบคาตานะไปเป็นรางวัลเล้ยยย ไปข้อต่อไปเลยๆๆๆ",
    "ข้อที่ 5 | ข้ามช่วงต้นมาเป็นช่วงกลางๆเลยแล้วกัน วันนี้ที่เราทะเลาะกันที่ข้าวสาร จำได้รึป่าวว่าหนังสือที่เธอเอาไปคืนคือเรื่องอะไร",
    "เขาได้ตายพร้อมกับเมียของเขาอย่างที่ตั้งใจ ในวันเดือนปีนั้นจุดจบกลับเป็นทางออกของปัญหา",
    "อันนี้ไม่แปลกที่จะตอบถูกคงตอบได้ไวมากเลยใช่มะๆ เหลืออีก 2 ข้อเองไปกันต่อ",
    "ข้อที่ 6 | วันสงกรานต์ปีแรกของเราไปน้ำด้วยกันที่ข้าวสารสนุกมากๆเลย แต่มันจะเป็นคำถามได้ยังไงนะ",
    "ละสงลองกรานต์ หมุนกลับด้านเป็นที่ใด",
    "เห้ยๆเก่งมากๆเลยข้อนึ้ยากอยู่น้า แต่แฟนก็ยังผ่านมาได้ไปข้อสุดท้ายเลย",
    "ข้อที่ 7 | ข้อสุดท้าย มาเล่นปริศนาคำทายกันดักว่า คำตอบเป็นภาษาอังกฤษนะครับ ",
    `ดอกไม้โปรยปราย ระฆังดังระงบ ปักษาสีขาวบินผ่าน ชั่วอึดใจแค่ประโยคสั้นๆเป็นช่วงเวลาที่ยากจะลืมเลือน จากเสียงรอบตัวเปลี่ยนเป็นเสียงปรบมือเป็นสํญญาเริ่มต้นเส้นทางใหม่ฉันคืออะไร`,
    "เย้ๆ ครบ 7 ข้อแล้วเก่ง มากๆๆๆๆ ความจริงเค้าคิดว่าเธอน่าจะใช้เวลาเล่นประมาณ 2-3 วัน ถ้าตั้งใจเล่น แต่ถ้าเล่นจบแล้วก็เก่งมากๆ",
    "ขอบคุณนะแฟนที่อยู่ด้วยกันมา 3 วาเลนไทน์ แน้วปีนี้เค้าแก่ตัวมาให้ของขวัญแฟนแน้ว พอได้ใช้อยู่ด้วยกันมากขึ้นทำให้มีเรื่องต้องปรับตัวอีกเยอะเลย แต่เราก็แบ่งปํนความรักให้กันได้อย่างดีนะเค้าว่า",
    "อยู่เป็นสาวในวัน วาเลนไทน์ของเค้าไปอีกนานๆ เลยนะ กินของที่มีประโยชน์ ออกกำลังกายบ้างนิดหน่อยจะได้อยู่ด้วยกันกะเค้าไปนานๆๆๆ",
    "เอาล่ะถึงเวลาที่จะได้รับของขวัญแล้วใช้ไหมล่ะ รางวัลของคนเก่งงั้ยย",
    "",
];
    let CurrentState = 0;
    let Currentindex = 0;
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

function saveState() {
    localStorage.setItem("gameState", JSON.stringify({
        Currentindex,
        CurrentState
    }));
}

function setCurrentindex(value) {
    Currentindex = value;
    saveState(); // Save the new index
    document.dispatchEvent(new CustomEvent('CurrentindexChanged', { detail: Currentindex }));
}

export function resetGame() {
    localStorage.removeItem("gameState");
    Currentindex = 0;
    CurrentState = 0;
    startTyping();
}

resetGame()


export function next() {
    if (isTyping || block) return;

    changeCharacterImage();
    document.querySelector('.counter').innerHTML = `${CurrentState} / 7`
    setCurrentindex((Currentindex + 1) % dialog.length);
    startTyping();
}

let lastRandomIndex = null; 

function changeCharacterImage() {
    const charDiv = document.querySelector(".char");
    console.log(lastRandomIndex + ' did');
    if (!charDiv) return;
    let randomIndex;  
    do {
        randomIndex = Math.floor(Math.random() * 3) + 1; 
    } while (randomIndex === lastRandomIndex); 
    lastRandomIndex = randomIndex;  
    charDiv.style.backgroundImage = `url('../src/charactor/char${randomIndex}.png')`;
}


export function setBlock(value) {
    if (value === true){
        document.querySelector('.tip').innerHTML = ``
    } 
    block = value;
}

export function addState(value) {
    CurrentState += value;
    saveState(); // Save the updated state
    return CurrentState;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedState = JSON.parse(localStorage.getItem("gameState"));
    if (savedState) {
        Currentindex = savedState.Currentindex || 0;
        CurrentState = savedState.CurrentState || 0;
    }

    const dialogBox = document.querySelector('.dialogBox');
    if (dialogBox) {
        dialogBox.addEventListener('click', next);
    }

    startTyping();
});

window.setBlock = setBlock;
window.next = next;
export { Currentindex};
