import { Currentindex, setBlock, next } from './dialog.js';
import { sawGlow, clear } from './state.js';

document.addEventListener('CurrentindexChanged', (event) => {
    console.log('Currentindex changed to:', event.detail);
    
    if (Currentindex === 2){
        document.querySelector('.counter').style.color = 'red';
        document.querySelector('.counter').style.textShadow = '1px 1px 10px red, 1px 1px 10px red';
        setBlock(true);
        sawGlow();
    }
    
    if (Currentindex === 3){
        document.querySelector('.counter').style.color = 'white';
        document.querySelector('.counter').style.textShadow = 'none';
        clear();
    }
    
});

