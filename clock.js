"use strict";

setInterval(clock,1009);

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

// main 
function clock() {
  const currentDate = new Date();
  const secRatio = currentDate.getSeconds()/60;
  const minRatio = (secRatio + currentDate.getMinutes())/60;
  const hourRatio = (minRatio + currentDate.getHours())/12;
  
  setHand(sec,secRatio);
  setHand(min,minRatio);
  setHand(hour,hourRatio);
} 

function setHand(hand,ratio) {
  hand.style.setProperty("--rotation",ratio*360);
}

clock();