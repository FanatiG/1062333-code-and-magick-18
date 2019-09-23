'use strict';

var FIRSTNAMES = [
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
var SECONDNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATCOLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYESCOLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var mageVariants = [];
var MAGEQUANTITY = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function generateData() {
  for (var i = 0; i < MAGEQUANTITY; i++) {
    var obj = {
      name: FIRSTNAMES[Math.floor(Math.random() * Math.floor(FIRSTNAMES.length))] + ' ' + SECONDNAMES[Math.floor(Math.random() * Math.floor(SECONDNAMES.length))],
      coatColor: COATCOLORS[Math.floor(Math.random() * Math.floor(COATCOLORS.length))],
      eyesColor: EYESCOLORS[Math.floor(Math.random() * Math.floor(EYESCOLORS.length))]
    };
    mageVariants[i] = obj;
  }
}

function showData() {
  generateData();
  document.getElementsByClassName('setup')[0].classList.remove('hidden');
  document.getElementsByClassName('setup-similar')[0].classList.remove('hidden');
  for (var i = 0; i < mageVariants.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    document.querySelector('.setup-similar-list').appendChild(wizardElement);
    wizardElement.querySelector('.setup-similar-label').innerHTML = mageVariants[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = mageVariants[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = mageVariants[i].eyesColor;
  }
}
showData();
