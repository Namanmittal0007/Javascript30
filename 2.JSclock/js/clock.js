//selecting sec-hand
const sechand = document.querySelector('.sec-hand');
//selecting min-hand
const minhand = document.querySelector('.min-hand');
//selecting hour-hand
const hourhand = document.querySelector('.hour-hand');

//cb func to update the time
function updatetime(){
    //adding 90deg to all because default position of hands are horizontal and to make them at 12'o clock
    // i.e vertical and then moving the req number of deg on each hand accordingly

     let sec=new Date().getSeconds();
     let secdeg=sec*(360/60)+90;
     sechand.style.transform = `rotate(${secdeg}deg)`;
     
     let min=new Date().getMinutes();
     let mindeg=min*(360/60)+90;
     minhand.style.transform = `rotate(${mindeg}deg)`;
     
     let hour=new Date().getHours();
     let hourdeg=((hour / 12) * 360) + ((min/60)*30) + 90;
     hourhand.style.transform = `rotate(${hourdeg}deg)`;
     console.log("Hour :",hour,hourdeg);

    // to handle the reverse transition of hands from 59 to 0
    if(sec==59 || min==59 || hour==59){
        sechand.style.transition = "all 0s";
        minhand.style.transition = "all 0s";
        hourhand.style.transition = "all 0s";
    }
    else{
        sechand.style.transition = "all 0.05s";
        minhand.style.transition = "all 0.05s";
        hourhand.style.transition = "all 0.05s";
    }
}

//updating time every second
setInterval(updatetime,1000);