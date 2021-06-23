// selecting all the inputs so that events on them can be tracked
const keys = document.querySelectorAll('.controls input');

//CB func that changes the documnet variables
function handlechanges(e){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

//eventListener looped over all the inputs so we have trigger a CB for that particular element if 
//changes take place
keys.forEach(key => key.addEventListener('change',handlechanges));
keys.forEach(key => key.addEventListener('mousemove',handlechanges));
