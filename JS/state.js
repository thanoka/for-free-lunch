import { firstCheck, secondCheck, threeCheck, fourCheck ,fiftCheck ,sixCheck, sevenCheck } from "./gameSub.js";

const content = document.querySelector(".content");

export const clear = () =>{
    content.innerHTML = `
    <div class="char"></div>
    `
}

export const head = (value) => {
    content.innerHTML = `
    <div class="head" style="background-image: url(../src/head/circle-${value}.png);"> </div>
    <div class="char" style="background-image: url('../src/charactor/charh2.png');"></div>
    `
}

export const correct = () => {
    content.innerHTML = `
    <div class="correct"> ✅ </div>
    <div class="char" style="background-image: url('../src/charactor/charl.png');"></div>
    `
}
export const love = () => {
    content.innerHTML = `
    <div class="correct"> 💓 </div>
    <div class="char" style="background-image: url('../src/charactor/charl.png');"></div>
    `
}

export const sawGlow = () => {
  content.innerHTML += `
        <div class="YNN">
        <label for="inputBox">เห็นมะ</label>
            <button class="yes-btn" onclick="setBlock(false); next();">เห็น 💖</button>
            <button class="no-btn" onclick="makeYesBigger()">ไม่อะ ❌</button>
        </div>
    `;
};

export const firstQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามแรก</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", firstCheck);
};

export const secondQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 2</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", secondCheck);
};
export const threeQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 3</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", threeCheck);
};
export const fourQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 4</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", fourCheck);
};
export const fiftdQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 5</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", fiftCheck);
};
export const sixQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 6</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", sixCheck);
};

export const sevenQuestion = () => {
    clear();
    content.innerHTML += `
        <div class="input-container">
            <label for="inputBox">คำถามที่ 7</label>
            <input type="text" id="inputBox" class="pastel-input" placeholder="Type your answer...">
            <button id="submitBtn" class="pastel-btn">Submit</button>
            <p id="hintBox" class="hint-text"></p>
        </div>
    `;

    document.getElementById("submitBtn").addEventListener("click", sevenCheck);
};


