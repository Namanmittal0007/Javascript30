const panels = document.querySelectorAll('.panel');
function expandcard(e){
    this.classList.toggle('open');
}
function gettext(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',expandcard));
panels.forEach(panel => panel.addEventListener('transitionend',gettext));