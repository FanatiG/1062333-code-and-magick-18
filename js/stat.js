'use strict';

var message = 'Ура вы победили!\nСписок результатов:';
var WINTEXTX = 120;
var WINTEXTY = 30;
var WINTEXTYSPACE = 20;
var RECTX = 150;
var RECTXSPACE = 90;
var RECTY = 250;
var RECTWIDTH = 40;
var RECTMAXHEIGHT = 150;
var NAMETEXTX = 150;
var NAMETEXTY = 255;
var NAMETEXTYSPACE = 180;
var PLAYERNAME = 'Вы';

window.renderStatistics = function (ctx, names, times) {
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 430, 280);
  ctx.fillStyle = '#FFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  message.split('\n').forEach(function (str, shift) {
    ctx.fillText(str, WINTEXTX, WINTEXTY + WINTEXTYSPACE * shift);
  });
  drawScore(ctx, names, times);
};

function drawScore(ctx, names, times) {
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === PLAYERNAME) ? 'rgba(255, 0, 0, 1)' : getRandomColor(times, i);
    ctx.fillRect(RECTX + RECTXSPACE * i, RECTY, RECTWIDTH, -Math.ceil(times[i]) / Math.ceil(getMaxOfArray(times)) * RECTMAXHEIGHT);
    ctx.fillText(names[i], NAMETEXTX + NAMETEXTYSPACE * i / 2, NAMETEXTY);
  }
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getRandomColor(times, i) {
  var h = 233;
  var s = Math.ceil(times[i]) / Math.ceil(getMaxOfArray(times)) * 100 + '%';
  var l = 30 + '%';
  return 'hsl(' + h + ',' + s + ',' + l + ')';
}
