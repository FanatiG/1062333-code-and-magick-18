'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 430, 280);
  ctx.fillStyle = '#FFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  var message = 'Ура вы победили!\nСписок результатов:';
  message.split('\n').forEach(function (str, shift) {
    ctx.fillText(str, 120, 30 + 20 * shift);
  });


  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = setHSL();
    }
    ctx.fillRect(150 + 90 * i, 250, 40, -Math.ceil(times[i]) / Math.ceil(getMaxOfArray(times)) * 150);
    ctx.fillText(names[i], 150 + 180 * i / 2, 255);
  }

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function setHSL() {
    var h = 233;
    var s = Math.floor(Math.random() * 100) + '%';
    var l = 30 + '%';
    return 'hsl(' + h + ',' + s + ',' + l + ')';
  }
};
