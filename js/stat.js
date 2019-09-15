'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.lineWidth = 5;
  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.fillRect(110, 20, 430, 280);
  ctx.fillStyle = "#FFF";
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "black";
  ctx.textBaseline = "hanging";
  var message = "Ура вы победили!\nСписок результатов:";
  message.split('\n').forEach(function (str, shift) {
    ctx.fillText(str, 120, 30 + 20 * shift);
  });
  console.log(names);
  console.log(times);


  for (let i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsl(233, 100%, 30%)";
    }
    ctx.fillRect(150 + 90 * i, 250, 40, -Math.ceil(times[i]) / Math.ceil(getMaxOfArray(times)) * 150);
    ctx.fillText(names[i], 150 + 180 * i/2, 255);
  }

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
}








//custom version______________________________________________________

// window.renderStatistics = function () { //custon func
//   document.getElementsByClassName('demo')[0].innerHTML = '';
//   var cnvs = document.createElement('canvas');
//   cnvs.id = "canvas";
//   cnvs.width = '800';
//   cnvs.height = '300';
//   document.getElementsByClassName('demo')[0].appendChild(cnvs);
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext("2d");
//   ctx.lineWidth = 5;
//   ctx.fillStyle = "rgba(0,0,0,0.7)";
//   ctx.fillRect(110, 20, 430, 280);
//   ctx.fillStyle = "#FFF";
//   ctx.fillRect(100, 10, 420, 270);
//   ctx.font = "16px PT Mono";
//   ctx.fillStyle = "black";
//   ctx.textBaseline = "hanging";
//   var message = "Ура вы победили!\nСписок результатов:";
//   message.split('\n').forEach(function (str, shift) {
//     ctx.fillText(str, 120, 30 + 20 * shift);
//   });
//   document.body.addEventListener('keyup', (event) => {
//     const keyName = event.keyCode;
//     if (keyName === 32 || keyName === 13 || keyName === 27 || keyName === 16) {
//       location.reload();
//     }
//   });
// var timesEnd = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()]; //custpm player score/time calc end
//   var playerTime = []; //custpm player score/time calc
//   for (let i = 0; i < timesStart.length; i++) {
//     switch (i) {
//       case 0:
//         playerTime[i] = Math.abs(timesEnd[i]-timesStart[i])*60*60*1000;
//         break;
//       case 1:
//         playerTime[i] = Math.abs(timesEnd[i]-timesStart[i])*60*1000;
//         break;
//       case 2:
//         playerTime[i] = Math.abs(timesEnd[i]-timesStart[i])*1000;
//         break;
//       default:
//         playerTime[i] = Math.abs(timesEnd[i]-timesStart[i]);
//         playerTime[4]=playerTime[0]+playerTime[1]+playerTime[2]+playerTime[3]; //final score
//   }
// };
// // custom scores/times
// var times = [];
// var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];
// for (let i = 0; i < names.length; i++) {
// times[i] = Math.ceil(Math.floor(Math.random() * (playerTime[4]*2 - 0 + 1)) + 0);
// };

// for (let i = 0; i < times.length; i++) {
//   if (names[i] === 'Вы') {
//     ctx.fillStyle = "rgba(255, 0, 0, 1)";
//   } else {
//     ctx.fillStyle = "hsl(233, 100%, 30%)";
//   }
//   ctx.fillRect(150 + 90 * i, 250, 40, -Math.ceil(times[i]) / Math.ceil(getMaxOfArray(times)) * 150);
//   ctx.fillText(names[i], 150 + 180 * i/2, 255);
// }

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
// };
// var timesStart = []; //custom player score/time calc start
// document.onkeyup = function (e) {
//   if (e.keyCode === 32) {
//     timesStart = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()];
//   }
// }
