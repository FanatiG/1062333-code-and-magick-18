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
  var mages = [];
  for (var i = 0; i < MAGE_QUANTITY; i++) {
    var obj = {
      name: getRandomElementFromArray(FIRST_NAMES) + '  ' + getRandomElementFromArray(LAST_NAMES),
      coatColor: getRandomElementFromArray(COAT_COLORS),
      eyesColor: getRandomElementFromArray(EYES_COLORS)
    };
    mages.push(obj);
  }
  return mages;
}
var userModal = document.querySelector('.setup');
userModal.classList.remove('hidden');
userModal.querySelector('.setup-similar').classList.remove('hidden');


function renderWizard(wizardElement, i) {
  wizardElement.querySelector('.setup-similar-label').textContent = generateData()[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = generateData()[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = generateData()[i].eyesColor;
}

function showData() {
  var mages = generateData();
  var fragment = document.createDocumentFragment();
  fragment.cloneNode(true);
  for (var i = 0; i < mages.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    renderWizard(wizardElement, i);
    fragment.appendChild(wizardElement);
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
}
showData();
