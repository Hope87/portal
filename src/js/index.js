// import video from '../video/video.mp4'
import '../scss/styles.scss'


const myCarousel = document.querySelector('#slider_controls')
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: true
})

const myCarousel2 = document.querySelector('#main-speaker__carousel')
const carousel2 = new bootstrap.Carousel(myCarousel2, {
    interval: false,
    wrap: true
})


//=========================================================//////

const inputsCollection = document.querySelectorAll('.calc__item-radio')
const inputs = Array.from(inputsCollection)
const btn = document.querySelector('.calc__back')
const stepsCollection = document.querySelectorAll('.calc__step ')
const stepsArr = Array.from(stepsCollection)
const progressBarRange = document.querySelector('.progress-bar__range')
const asideTextCollection = document.querySelectorAll('.calc__project-text')
const asideTextArr = Array.from(asideTextCollection)



let stepsIndex = 0;
const progressBarRangeStyleWidth = progressBarRange.style.width
let progressBarRangeCurrentStyle = progressBarRangeStyleWidth;




const asideText = (text) => {


    let currentTextItem = asideTextArr[stepsIndex - 1]

    currentTextItem.textContent = text
    currentTextItem.style.color = 'red'

}

const asideTextOrigin = () => {

    const originTextArr = ['тип', 'платформа', 'состояние', 'старт']


    let originTextItem = asideTextArr[stepsIndex]


    let originText = originTextArr[stepsIndex]


    originTextItem.textContent = originText
    originTextItem.style.color = 'black'

}





const stepsIncrement = () => {
    stepsIndex += 1
}

const stepsDecrement = () => {
    stepsIndex -= 1
}

const steps = (function() {

    return inputs.forEach(input => {

        input.addEventListener('click', (e) => {

            const target = e.target

            let text = target.nextElementSibling.nextElementSibling.textContent



            stepsIncrement()

            asideText(text)

            stepsArr.forEach(step => step.classList.remove('calc__step_active'))


            let nextStep = stepsArr[stepsIndex]
            nextStep.classList.add('calc__step_active')


            let progressBarRangeWidth = progressBarRangeCurrentStyle.split('%').join('')



            progressBarRangeCurrentStyle = (Number(progressBarRangeWidth) + 20) + '%'

            progressBarRange.style.width = progressBarRangeCurrentStyle;



            if (stepsIndex >= 1) {
                btn.classList.add('calc__back__style')
            }

            if (stepsArr.length < stepsIndex) {
                stepsIndex = 0;
            }
        })

    })
}())

btn.addEventListener('click', () => {
    stepsDecrement()

    asideTextOrigin()


    stepsArr.forEach(step => step.classList.remove('calc__step_active'))


    let currentStep = stepsArr[stepsIndex]
    currentStep.classList.add('calc__step_active')


    let progressBarRangeWidth = progressBarRangeCurrentStyle.split('%').join('')


    progressBarRangeCurrentStyle = (Number(progressBarRangeWidth) - 20) + '%'

    progressBarRange.style.width = progressBarRangeCurrentStyle;

    if (stepsIndex === 0) {
        btn.classList.remove('calc__back__style')
    }
})