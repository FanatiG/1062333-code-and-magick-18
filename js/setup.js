'use strict';

var firstNames = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var element1 = document.getElementsByClassName('setup')[0];
element1.classList.remove('hidden');

var element2 = document.getElementsByClassName('setup-similar')[0];
element2.classList.remove('hidden');

var mageVariants = [];
for (var i = 0; i < 4; i++) {
  var obj = {
    name: firstNames[Math.floor(Math.random() * Math.floor(firstNames.length))] + ' ' + secondNames[Math.floor(Math.random() * Math.floor(secondNames.length))],
    coatColor: coatColor[Math.floor(Math.random() * Math.floor(coatColor.length))],
    eyesColor: eyesColor[Math.floor(Math.random() * Math.floor(eyesColor.length))]
  };
  mageVariants[i] = obj;
}

for (i = 0; i < mageVariants.length; i++) {
  var mageOuterDivElement = document.createElement('div');
  mageOuterDivElement.className = 'setup-similar-item';

  var mageInnerDivElement = document.createElement('div');
  mageInnerDivElement.className = 'setup-similar-content';

  var mageName = document.createElement('p');
  mageName.className = 'setup-similar-label';
  // eslint-disable-next-line no-console
  console.log(mageVariants[i]);
  mageName.innerHTML = mageVariants[i].name;

  var mageCoat = document.createElement('use');
  mageCoat.className = 'wizard-coat';
  mageCoat.href = '#wizard-coat';

  var mageHead = document.createElement('use');
  mageHead.className = 'wizard-head';
  mageHead.href = '#wizard-head';

  var mageEyes = document.createElement('use');
  mageEyes.className = 'wizard-eyes';
  mageEyes.href = '#wizard-eyes';

  var mageHands = document.createElement('use');
  mageHands.className = 'wizard-hands';
  mageHands.href = '#wizard-hands';

  document.getElementsByClassName('setup-similar-list')[0].appendChild(mageOuterDivElement).appendChild(mageInnerDivElement).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 86" class="setup-similar-wizard"><g class="wizard"><use xlink:href="#wizard-coat" class="wizard-coat"></use><use xlink:href="#wizard-head" class="wizard-head"></use><use xlink:href="#wizard-eyes" class="wizard-eyes"></use><use xlink:href="#wizard-hands" class="wizard-hands"></use></g></svg>';
  document.getElementsByClassName('setup-similar-list')[0].querySelectorAll('.wizard-coat')[i].style.fill = mageVariants[i].coatColor;
  document.getElementsByClassName('setup-similar-list')[0].querySelectorAll('.wizard-eyes')[i].style.fill = mageVariants[i].eyesColor;
  document.getElementsByClassName('setup-similar-list')[0].appendChild(mageOuterDivElement).appendChild(mageName);
}
