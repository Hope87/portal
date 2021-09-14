import '../scss/styles.scss';
import '../fonts/stylesheet.css';

// console.log(document.querySelector('.burger'));

document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.animated-icon1').classList.toggle('open');
  document.querySelector('.header').classList.toggle('toggle-collapse');

});



(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal(
    'section',
    {
      duration: 1000,
      distance: '40px',
      easing: 'ease',
      origin: 'bottom',
      reset: true,
      scale: 1,
      viewFactor: 0,
    },
    150
  );
})();

const myCarousel = document.querySelector('#slider_controls');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: true,
});

const myCarousel2 = document.querySelector('#main-speaker__carousel');
const carousel2 = new bootstrap.Carousel(myCarousel2, {
  interval: false,
  wrap: true,
});

const inputsCollection = document.querySelectorAll('.calc__item-radio');
const inputs = Array.from(inputsCollection);
const btn = document.querySelector('.calc__back');
const stepsCollection = document.querySelectorAll('.calc__step ');
const stepsArr = Array.from(stepsCollection);
const progressBarRange = document.querySelector('.progress-bar__range');
const progressCurrentt = document.querySelector('.calc__progress-current');
const asideTextCollection = document.querySelectorAll('.calc__project-text');
const asideTextArr = Array.from(asideTextCollection);
const technologies = document.querySelector('.technologies');

let stepsIndex = 0;
const progressBarRangeStyleWidth = progressBarRange.style.width;
let progressBarRangeCurrentStyle = progressBarRangeStyleWidth;

const asideText = (text) => {
  let currentTextItem = asideTextArr[stepsIndex - 1];

  currentTextItem.textContent = text;
  currentTextItem.style.color = 'red';
};

const asideTextOrigin = () => {
  const originTextArr = ['тип', 'платформа', 'состояние', 'старт'];

  let originTextItem = asideTextArr[stepsIndex];

  let originText = originTextArr[stepsIndex];

  originTextItem.textContent = originText;
  originTextItem.style.color = 'black';
};

const stepsIncrement = () => {
  stepsIndex += 1;
};

const stepsDecrement = () => {
  stepsIndex -= 1;
};

const steps = (function () {
  return inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
      const target = e.target;

      let text = target.nextElementSibling.nextElementSibling.textContent;

      stepsIncrement();

      asideText(text);

      stepsArr.forEach((step) => step.classList.remove('calc__step_active'));

      let nextStep = stepsArr[stepsIndex];
      nextStep.classList.add('calc__step_active');

      let progressBarRangeWidth = progressBarRangeCurrentStyle.split('%').join('');

      progressBarRangeCurrentStyle = Number(progressBarRangeWidth) + 20 + '%';

      progressBarRange.style.width = progressBarRangeCurrentStyle;

      progressCurrentt.textContent++;

      if (stepsIndex >= 1) {
        btn.classList.add('calc__back__style');
      }

      if (stepsArr.length < stepsIndex) {
        stepsIndex = 0;
      }
    });
  });
})();

btn.addEventListener('click', () => {
  stepsDecrement();

  asideTextOrigin();

  stepsArr.forEach((step) => step.classList.remove('calc__step_active'));

  let currentStep = stepsArr[stepsIndex];
  currentStep.classList.add('calc__step_active');

  let progressBarRangeWidth = progressBarRangeCurrentStyle.split('%').join('');

  progressBarRangeCurrentStyle = Number(progressBarRangeWidth) - 20 + '%';

  progressBarRange.style.width = progressBarRangeCurrentStyle;

  progressCurrentt.textContent--;

  if (stepsIndex === 0) {
    btn.classList.remove('calc__back__style');
  }
});



// $(document).ready(function () {
//
//   $('.first-button').on('click', function () {
//
//     $('.animated-icon1').toggleClass('open');
//   });
//   $('.second-button').on('click', function () {
//
//     $('.animated-icon2').toggleClass('open');
//   });
//   $('.third-button').on('click', function () {
//
//     $('.animated-icon3').toggleClass('open');
//   });
// });