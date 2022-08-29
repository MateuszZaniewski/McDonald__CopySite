const switchMode = document.querySelector('.navbar__item--3-img')
switchMode.addEventListener('click', dayAndNight)

const hamburger = document.querySelector('.navbar__item--hamburger')
hamburger.addEventListener('click', showMenu)

const menu = document.querySelector('.menu')
const nav = document.querySelector('.navbar')
const sun = document.querySelector('.navbar__item--3-img')
const mainText = document.querySelector('.main__text--text')
const mainAd = document.querySelector('.main__ads__ad')




// switches dark mode and light mode

let darkMode = false
function dayAndNight() {
    if(!darkMode) {
        switchMode.src = 'assets/9104141_sun_bright_brightness_light mode_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(720deg)';

        darkMode = true;
    } else {
        switchMode.src = 'assets/7148715_dark_mode_night_moon_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out';
        switchMode.style.transform = 'rotate(-720deg)';

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
                    'assets/346792-www_Supreme-Crispy-Chicken-2021_03_800x800-Kielce-5.jpg',
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

let intervalImg = setInterval(changeImg, 5000);

function changeImg() {
    mainAd.src = imgArray[counter];
    counter++;
    if (counter >= imgArray.length) {
        counter = 0
    }
}