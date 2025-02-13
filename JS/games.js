import { Currentindex, setBlock} from "./dialog.js";
import {
  sawGlow,
  clear,
  head,
  correct,
  love,
  firstQuestion,
  secondQuestion,
  threeQuestion,
  fourQuestion,
  fiftdQuestion,
  sixQuestion,
  sevenQuestion,
} from "./state.js";

import { end } from "./end.js";




function handleCurrentIndex() {
  const charDiv = document.querySelector(".char");

  
  const updateCharDivBackground = (rangeStart, rangeEnd) => {
    if (Currentindex > rangeStart && Currentindex <= rangeEnd) {
      charDiv.style.backgroundImage = `url('../src/charactor/charb1.png')`;
    }
  };


  const handleIndexBehavior = (index, action) => {
    if (Currentindex === index) action(); ;
  };

  
  updateCharDivBackground(4, 6); 
  updateCharDivBackground(7, 9); 
  updateCharDivBackground(10, 12); 
  updateCharDivBackground(13, 15);
  updateCharDivBackground(16, 18);
  updateCharDivBackground(19, 21); 
  updateCharDivBackground(23, 24); 


  handleIndexBehavior(2, () => {
    document.querySelector(".counter").style.color = "red";
    document.querySelector(".counter").style.textShadow = "1px 1px 10px red, 1px 1px 10px red";
    sawGlow();
  });

  handleIndexBehavior(3, () => {
    document.querySelector(".counter").style.color = "white";
    document.querySelector(".counter").style.textShadow = "none";
    clear();
  });

  handleIndexBehavior(5, () => head(1));
  handleIndexBehavior(6, () => {
    firstQuestion();
    setBlock(true);
  });

  handleIndexBehavior(7, clear);
  handleIndexBehavior(7, correct);
  handleIndexBehavior(8, () => head(2));
  handleIndexBehavior(9, () => {
    secondQuestion();
    setBlock(true);
  });

  handleIndexBehavior(10, clear);
  handleIndexBehavior(10, correct);
  handleIndexBehavior(11, () => head(3));
  handleIndexBehavior(12, () => {
    threeQuestion();
    setBlock(true);
  });

  handleIndexBehavior(13, clear);
  handleIndexBehavior(13, correct);
  handleIndexBehavior(14, () => head(4));
  handleIndexBehavior(15, () => {
    fourQuestion();
    setBlock(true);
  });

  handleIndexBehavior(16, clear);
  handleIndexBehavior(16, correct);
  handleIndexBehavior(17, () => head(5));
  handleIndexBehavior(18, () => {
    fiftdQuestion();
    setBlock(true);
  });

  handleIndexBehavior(19, clear);
  handleIndexBehavior(19, correct);
  handleIndexBehavior(20, () => head(6));
  handleIndexBehavior(21, () => {
    sixQuestion();
    setBlock(true);
  });

  handleIndexBehavior(22, clear);
  handleIndexBehavior(22, correct);
  handleIndexBehavior(23, () => head(7));
  handleIndexBehavior(24, () => {
    sevenQuestion();
    setBlock(true);
  });

  handleIndexBehavior(25, clear)
  handleIndexBehavior(25, correct);
  handleIndexBehavior(26, love);


  handleIndexBehavior(29, end)
}


document.addEventListener("CurrentindexChanged", (event) => {
  console.log("Currentindex changed to:", event.detail);
  handleCurrentIndex(); 
});


window.onload = () => {
  handleCurrentIndex(); 
};
