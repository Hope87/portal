import '../scss/styles.scss';
import '../fonts/stylesheet.css';

// const WOW = require('wowjs');

// window.wow = new WOW.WOW();
// window.wow.init();

// (function scrollReveal() {
//   window.sr = ScrollReveal();

//   sr.reveal(
//     'section',
//     {
//       duration: 1000,
//       distance: '40px',
//       easing: 'ease',
//       origin: 'bottom',
//       reset: true,
//       scale: 1,
//       viewFactor: 0,
//     },
//     150
//   );
// })();

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

//=========================================================//////

// let controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 30 } });

// // build scenes
// new ScrollMagic.Scene({ triggerElement: '#sec1' })
//   .setClassToggle('#sec1', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: '#sec2' })
//   .setClassToggle('#sec2', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: '#sec3' })
//   .setClassToggle('#sec3', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: '#sec4' })
//   .setClassToggle('#sec4', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: '#sec5' })
//   .setClassToggle('#sec5', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// new ScrollMagic.Scene({ triggerElement: '#sec6' })
//   .setClassToggle('#sec6', 'animate__fadeInUp') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);

//=========================================================//////

const inputsCollection = document.querySelectorAll('.calc__item-radio');
const inputs = Array.from(inputsCollection);
const btn = document.querySelector('.calc__back');
const stepsCollection = document.querySelectorAll('.calc__step ');
const stepsArr = Array.from(stepsCollection);
const progressBarRange = document.querySelector('.progress-bar__range');
const progressCurrentt = document.querySelector('.calc__progress-current');
const asideTextCollection = document.querySelectorAll('.calc__project-text');
const asideTextArr = Array.from(asideTextCollection);
const test = document.querySelector('.technologies');

window.addEventListener('scroll', function () {
  let y = pageYOffset + 'px';

  if (y > '583px') {
    test.classList.add('none');
  } else if (y > '1905px' && y < '582px') {
    test.classList.remove('none');
  }

  console.log(y);
});

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
