//cb func to play sound corresponding to the pressed key
function playsound(e){
    let audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);   //Extract audio for key
    let key = this.document.querySelector(`div.keys[data-keys="${e.keyCode}"]`); //selecting the element corresponding key
    if(!audio) return;
    else{
        audio.currentTime=0;
        audio.play();
        key.classList.add('playing');
    }
}

//cb func to end the transition from any key element
function endtransition(e){
    if(e.propertyName != "transform") return;       //check if the transform took place for this element 
    this.classList.remove('playing');               //remove class playing from the element
}


//selecting all the elements with class .keys
let keys = document.querySelectorAll('.keys');
//looping over keys to check if transion end and call endtransition func
keys.forEach( key => key.addEventListener("transitionend",endtransition))
//checking for window if any keydown(key is being pressed) and calling playsound
window.addEventListener("keydown",playsound);
