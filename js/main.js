const switchMode = document.querySelector('.navbar__item--3-img')
switchMode.addEventListener('click', dayAndNight)

const hamburger = document.querySelector('.navbar__item--hamburger')
hamburger.addEventListener('click', showMenu)

const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar')
const sun = document.querySelector('.navbar__item--3-img')
const mainText = document.querySelector('.main__text--text')
const mainAd = document.querySelector('.main__ads__ad')
const header = document.querySelector('header')
const menuCategory = document.querySelectorAll('.menu__item--link--span')
const main = document.querySelector('.main')
const mainh1 = document.querySelector('.main__h1')
const mainh1h1 = document.querySelector('.main__h1--h1')
const mainh1Text = document.querySelector('.main__h1--text')
const mainh1Btn = document.querySelector('.main__h1--btn')
const mainh1BtnLink = document.querySelector('.main__h1--btn--link')
const mainTextText = document.querySelector('.main__text--text')
const copyRight = document.querySelector('.copyright')
const body = document.querySelector('body')
body.addEventListener('click', hideMenu)

function hideMenu() {
 
}


// switches dark mode and light mode

let darkMode = false
function dayAndNight() {
    if(!darkMode) {
        switchMode.src = 'assets/sun.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(720deg)';
        body.style.backgroundColor = '#1b1a1a'
        menu.style.background = '#1b1a1a'
        menuCategory.forEach((el) => {
            el.style.color = 'white'
        })
        main.style.background = '#1b1a1a'
        mainh1.style.background = '#1b1a1a'
        mainh1h1.style.color = '#eca50c'
        mainh1Text.style.color = 'white'
        mainh1Btn.style.color = 'white'
        mainh1BtnLink .style.color = 'white'
        mainTextText.style.color = 'white'
        copyRight.style.color = 'white'

        darkMode = true;
    } else {
        switchMode.src = 'assets/dark-mode.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(-720deg)';
        body.style.backgroundColor = '#f1f3f6'
        menu.style.background = '#f1f3f6'
        menuCategory.forEach((el) => {
            el.style.color = ''
        })
        main.style.background = '#f1f3f6'
        mainh1.style.background = '#f1f3f6'
        mainh1h1.style.color = 'black'
        mainh1Text.style.color = 'black'
        mainh1Btn.style.color = 'black'
        mainh1BtnLink .style.color = 'black'
        mainTextText.style.color = 'black'
        copyRight.style.color = 'black'
        
        darkMode = false;
    }
}

// showing menu visible

function showMenu() {
    hamburger.classList.toggle('open')
    menu.classList.toggle('hidden')
}

const textArray = [ 
                    'Zacznijmy razem dobry dzie??',
                    'Chicken Box. Ca??a paczka chrupie',
                    'Nowa oferta McCaffe',
                    'Skills for life',
                    'Pracuj razem z nami w McDonalds',
                    'Spr??buj nowego Spicy Chicken Box']

const imgArray = [
                    'assets/slide__img1.jpg',
                    'assets/slide__img2.jpg',
                    'assets/slide__img3.jpg',
                    'assets/slide__img4.jpg',
                    'assets/slide__img5.jpg',
                    'assets/slide__img6.jpg',
]

let counter = 0;
// const mainText = document.querySelectorAll('.main__text--text')
let intervalText = setInterval(changeText, 5000);

function changeText() {
    mainText.innerText = textArray[counter];
    counter++;
    if (counter >= textArray.length) {
        counter = 0;
    }
}

let counter1 = 0;
let intervalImg = setInterval(changeImg, 5000);

function changeImg() {
    mainAd.src = imgArray[counter1];
    counter1++;
    if (counter1 >= imgArray.length) {
        counter1 = 0
    }
}