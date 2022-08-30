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


// switches dark mode and light mode

let darkMode = false
function dayAndNight() {
    if(!darkMode) {
        switchMode.src = 'assets/9104141_sun_bright_brightness_light mode_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(720deg)';

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

        darkMode = true;
    } else {
        switchMode.src = 'assets/7148715_dark_mode_night_moon_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(-720deg)';

        menu.style.background = '#fff'
        menuCategory.forEach((el) => {
            el.style.color = ''
        })
        main.style.background = '#fff'
        mainh1.style.background = '#fff'
        mainh1h1.style.color = 'black'
        mainh1Text.style.color = 'black'
        mainh1Btn.style.color = 'black'
        mainh1BtnLink .style.color = 'black'
        mainTextText.style.color = 'black'
        
        darkMode = false;
    }
}

// showing menu visible

function showMenu() {
    hamburger.classList.toggle('open')
    menu.classList.toggle('hidden')
}

const textArray = [ 
                    'Zacznijmy razem dobry dzień',
                    'Chicken Box. Cała paczka chrupie',
                    'Nowa oferta McCaffe',
                    'Skills for life',
                    'Pracuj razem z nami w McDonalds',
                    'Spróbuj nowego Spicy Chicken Box']

const imgArray = [
                    'assets/348540-Maestro-2022_14_800x800-Katowice-8.webp',
                    'assets/mcwrap-760x950.webp',
                    'assets/076112_r0_940.jpg',
                    'assets/maxresdefault.jpg',
                    'assets/346792-www_Supreme-Crispy-Chicken-2021_03_800x800-Kielce-5.jpg'
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