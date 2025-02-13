import { addState } from "./dialog.js";

export function firstCheck() {
  const correctAnswer = "P-10"; 
  const userInput = document.getElementById("inputBox").value.trim();
  const hintBox = document.getElementById("hintBox");
  console.log(userInput);

  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 อ่านคำใบ้ตัวแรกใหม่",
      "🔹 ผู้ถึงอณาจักรและครอบครัว",
      "🔹 ใช้ = เชื่อม",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}
export function secondCheck() {
  const correctAnswer = "CHLORIS , DIONYSUS ,  APHRODITE";
  const userInput = document.getElementById("inputBox").value;
  const hintBox = document.getElementById("hintBox");

  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 สังเกตุการวางคำดีๆ",
      "🔹 ท้ายประโยคพูดถีงลักษณะอะไรสักอย่าง",
      "🔹 ใส่ใจเว้นวรรค",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}

export function threeCheck() {
  const correctAnswer = "ASS IS SO GREAT";
  const userInput = document.getElementById("inputBox").value;
  const hintBox = document.getElementById("hintBox");

  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 เดินมาท่องสะดีๆ",
      "🔹 เดินมาท่องสะดีๆ",
      "🔹 เดินมาท่องสะดีๆ",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}

export function fourCheck() {
  const correctAnswer = "ซามูไร";
  const userInput = document
    .getElementById("inputBox")
    .value.trim()
    .toLowerCase();
  const hintBox = document.getElementById("hintBox");

  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 ยุคที่เกิด",
      "🔹 ข้ารับใช้เป็นความหมายของคำ",
      "🔹 เค้าอยากได้อาวุธ",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}

export function fiftCheck() {
  const correctAnswer = "13/06/2491";
  const userInput = document
    .getElementById("inputBox")
    .value.trim()
    .toLowerCase();
  const hintBox = document.getElementById("hintBox");

  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 วว/ดด/ปปปป",
      "🔹 เธอชอบ",
      "🔹 นับแบบชาวพุทธ",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}

export function sixCheck() {
  const correctAnswer = `13°45'33.0"S 79°30'09.9"E`;
  const userInput = document.getElementById("inputBox").value;
  const hintBox = document.getElementById("hintBox");
  console.log(userInput);
  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 อ่านคำใบ้ให้ถ่องแท้",
      "🔹 เป็นรูปแบบทั่วไปก็อปวางได้เลย",
      "🔹 =180",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}
export function sevenCheck() {
  const correctAnswer = `Wedding`;
  const userInput = document.getElementById("inputBox").value;
  const hintBox = document.getElementById("hintBox");
  console.log(userInput);
  if (userInput === correctAnswer) {
    hintBox.innerHTML = "✅ Correct!";
    hintBox.style.color = "green";
    setBlock(false);
    document.querySelector('.tip').innerHTML = `Click here to continues`
    next();
    addState(1);
  } else {
    let hints = [
      "❌ ผิดจ้าาา! อะนี่คำใบ้:",
      "🔹 ไม่มีๆๆๆ",
      "🔹 ไม่มีๆๆๆ ข้อสุดท้ายแล้วไม่ให้",
      "🔹 ไม่มีๆๆๆ",
    ];
    hintBox.innerHTML = hints.join("<br>");
    hintBox.style.color = "red";
  }
}
