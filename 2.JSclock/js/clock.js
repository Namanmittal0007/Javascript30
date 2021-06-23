const sechand = document.querySelector('.sec-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function updatetime(){

     let sec=new Date().getSeconds();
     let secdeg=sec*(360/60)+90;
     sechand.style.transform = `rotate(${secdeg}deg)`;
    //  console.log("Seconds :", sec);
     
     let min=new Date().getMinutes();
     let mindeg=min*(360/60)+90;
     minhand.style.transform = `rotate(${mindeg}deg)`;
    //  console.log("minute :", min );
     
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

setInterval(updatetime,1000);