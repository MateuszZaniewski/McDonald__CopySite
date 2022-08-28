const switchMode = document.querySelector('.navbar__item--3-img')
switchMode.addEventListener('click', dayAndNight)

const hamburger = document.querySelector('.navbar__item--hamburger')
hamburger.addEventListener('click', showMenu)

const menu = document.querySelector('.menu')

const mainText = document.querySelector('.main__text--text')


// switches dark mode and light mode

let darkMode = false
function dayAndNight() {
    if(!darkMode) {
        switchMode.src = 'assets/9104141_sun_bright_brightness_light mode_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out'
        switchMode.style.transform = 'rotate(720deg)'
        darkMode = true;
    } else {
        switchMode.src = 'assets/7148715_dark_mode_night_moon_icon.png';
        switchMode.style.transition = 'all 1s ease-in-out'
        switchMode.style.transform = 'rotate(-720deg)'
        darkMode = false;
    }
}

// showing menu visible

function showMenu() {
    hamburger.classList.toggle('open')
    menu.classList.toggle('hidden')
}

const textArray = [ 'Zacznijmy razem dobry dzień',
                    'Chicken Box. Cała paczka chrupie',
                    'Nowa oferta McCaffe',
                    'Skills for life',
                    'Pracuj razem z nami w McDonalds',
                    'Spróbuj nowego Spicy Chicken Box']

let counter = 0;
// const mainText = document.querySelectorAll('.main__text--text')
let interval = setInterval(change, 3000);

function change() {
    mainText.innerText = textArray[counter];
    counter++;
    if (counter >= textArray.length) {
        counter = 0;
    }
}