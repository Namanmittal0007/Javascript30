function playsound(e){
    let audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = this.document.querySelector(`div.keys[data-keys="${e.keyCode}"]`);
    if(!audio) return;
    else{
        audio.currentTime=0;
        audio.play();
        key.classList.add('playing');
    }
}
function endtransition(e){
    if(e.propertyName != "transform") return;
    this.classList.remove('playing');
}
let keys = document.querySelectorAll('.keys');
keys.forEach( key => key.addEventListener("transitionend",endtransition))
window.addEventListener("keydown",playsound);
window.addEventListener("click",playsound);
