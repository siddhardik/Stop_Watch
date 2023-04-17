// console.log("I am Stop Watch ");

const time=document.querySelector('.show-time');

// // buttons 
const start_btn=document.getElementById("start");
const stop_btn=document.getElementById("stop");
const reset_btn=document.getElementById("reset");


start_btn.addEventListener("click",start);
stop_btn.addEventListener("click",stop);
reset_btn.addEventListener("click",reset);


var ds=0;
let cds=0;
let ss=0;
let mm=0;
let hh=0;
// hh=Math.floor(ds/36000);
//     mm=Math.floor((ds-hh*36000)/600);
//     ss=Math.floor((ds-hh*36000-mm*600)/10);
//     ds=ds-hh*36000-mm*600-ss*10;
//     if(ds<10){
//         ds="0"+ds;
//     }
//     if(ss<10){
//         ss="0"+ss;
//     }
//      if(mm<10){
//         mm="0"+mm;
//     }
//     if(hh<10){
//         hh="0"+hh;
//     }
//     time.innerText=`${hh} : ${mm} : ${ss} : ${ds}`;
    // time.inneText=samay;

function timeIncrease(){
    ds++;
    
    cds=ds%10;
    ss=Math.floor((ds-hh*36000-mm*600)/10);
    mm=Math.floor((ds-hh*36000)/600);
    hh=Math.floor(ds/36000);

    if(cds<10){
        cds="0"+cds;
    }
    if(ss<10){
        ss="0"+ss;
    }
     if(mm<10){
        mm="0"+mm;
    }
    if(hh<10){
        hh="0"+hh;
    }

    time.innerText=`${hh} : ${mm} : ${ss} : ${cds}`;  
}


let interval =undefined;

function start(){
    if(interval==undefined){
        interval=setInterval(timeIncrease,100);
        // 100 miliseconds = 1 desisecond 
    }
    else{
        return;
    }

}

function stop(){
    if(interval!=undefined){
         // StopWatch is on running state
         clearInterval(interval);
         interval=undefined;
    }
    else{
      alert("Stopwatch is Off Now! ⌚");
    }
}

function reset(){
    alert("Are you sure you want to reset🤔?")
    stop();
    ds="00",hh="00",mm="00",ss="00";

    time.innerText=`${hh} : ${mm} : ${ss} : ${ds}`;


}


// copyright portion Disclaimer

let copyright = document.getElementById("copy_right");
copyright.innerHTML = `Copyright © ${new Date().getFullYear()} siddhardik`;
