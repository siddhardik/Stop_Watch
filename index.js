// console.log("I am Stop Watch ");

const time=document.querySelector('.show-time');

// buttons 
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

// time.innerHTML='05 : 00 : 00 : 00';

let ds=36610;
let ss=0;
let mm=0;
let hh=0;
hh=Math.floor(ds/36000);
    mm=Math.floor((ds-hh*36000)/600);
    ss=Math.floor((ds-hh*36000-mm*600)/10);
    ds=ds-hh*36000-mm*600-ss*10;

    let samay=`${hh} : ${mm} : ${ss} : ${ds}`;
    time.inneText=samay;

function timer(){
    ds++;
    
    hh=Math.floor(ds/36000);
    mm=Math.floor((ds-hh*36000)/600);
    ss=Math.floor((ds-hh*36000-mm*600)/10);
    ss=ds-hh*36000-mm*600-ss*10;
}