const content = document.querySelector(".content");

export const clear = () =>{
    content.innerHTML = ``
}

export const sawGlow = () => {
  content.innerHTML = `
        <div class="YNN">
            <button class="yes-btn" onclick="setBlock(false); next();">Yes 💖</button>
            <button class="no-btn" onclick="makeYesBigger()">No ❌</button>
        </div>
    `;
};
