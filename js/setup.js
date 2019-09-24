'use strict';

var FIRST_NAMES = [
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
var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var MAGE_QUANTITY = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}

function generateData() {
  var mageVariants = [];
  for (var i = 0; i < MAGE_QUANTITY; i++) {
    var obj = {
      name: getRandomElementFromArray(FIRST_NAMES) + '  ' + getRandomElementFromArray(LAST_NAMES),
      coatColor: getRandomElementFromArray(COAT_COLORS),
      eyesColor: getRandomElementFromArray(EYES_COLORS)
    };
    mageVariants.push(obj);
  }
  return mageVariants;
}

function renderWizard(wizardElement, i) {
  document.querySelector('.setup-similar-list').appendChild(wizardElement);
  wizardElement.querySelector('.setup-similar-label').textContent = generateData()[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = generateData()[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = generateData()[i].eyesColor;
}

function showData() {
  document.getElementsByClassName('setup')[0].classList.remove('hidden');
  document.getElementsByClassName('setup-similar')[0].classList.remove('hidden');
  for (var i = 0; i < generateData().length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    renderWizard(wizardElement, i);
  }
}
showData();
