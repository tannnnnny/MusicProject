function userDialog() {
    let name = prompt("Як тебе звати?");

    if (!name) {
        alert("Шкода, що ти не захотів представитися!");
        return;
    }

    let repeat = confirm(`Привіт, ${name}! Хочеш я ще раз привітаюсь?`);

    while (repeat) {
        alert(`Привіт ще раз, ${name}!`);
        repeat = confirm("Ще раз привітатись?");
    }

    alert("Дякую за спілкування!");
}


function displayDeveloperInfo(lastName, firstName, position = 'Розробник') {
    alert(`Інформація про розробника:
    Прізвище: ${lastName}
    Ім'я: ${firstName}
    Посада: ${position}`);
}
document.getElementById("showInfoButton").onclick = function () {
    displayDeveloperInfo("Понзель", "Тетяна");
};


function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2 > str1) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові!");
    }
}
function greetUser() {
    alert("Привіт! Зараз відбудеться порівняння рядків.");
}
document.getElementById("compareStringsButton").addEventListener("click", greetUser);
document.getElementById("compareStringsButton").addEventListener("click", function () {
    const firstString = prompt("Введіть перший рядок:");
    const secondString = prompt("Введіть другий рядок:");
    compareStrings(firstString, secondString);
});


const backgroundChanger = {
    handleEvent(event) {
        console.log("Подія спрацювала на елементі:", event.currentTarget);
        let originalBackground = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#215e54';
        setTimeout(function () {
            document.body.style.backgroundColor = originalBackground;
        }, 30000);
    }
};
const btn = document.getElementById('changeBackgroundBtn');
btn.addEventListener('click', backgroundChanger);
//btn.removeEventListener('click', backgroundChanger);

const buttons = [
    'startDialogButton',
    'showInfoButton',
    'compareStringsButton',
    'changeBackgroundBtn',
    'redirectBtn'
];

buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('mouseover', (event) => {
            console.log('mouseover → target:', event.target, 'from:', event.relatedTarget);
            event.target.classList.add('highlighted');
        });

        btn.addEventListener('mouseout', (event) => {
            console.log('mouseout → target:', event.target, 'to:', event.relatedTarget);
            event.target.classList.remove('highlighted');
        });
    }
});

const logo = document.querySelector('.logo');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

logo.style.position = 'absolute';
logo.style.cursor = 'move';

logo.addEventListener('mousedown', function (event) {
    isDragging = true;
    const rect = logo.getBoundingClientRect();
    offsetX = event.pageX - (rect.left + window.scrollX);
    offsetY = event.pageY - (rect.top + window.scrollY);
    logo.style.zIndex = 1000;
    event.preventDefault();
});

document.addEventListener('mousemove', function (event) {
    if (!isDragging) return;

    let newLeft = event.pageX - offsetX;
    let newTop = event.pageY - offsetY;

    // Обмеження, щоб логотип не виходив за межі видимої частини сторінки
    const windowWidth = window.innerWidth + window.scrollX;
    const windowHeight = window.innerHeight + window.scrollY;
    const elWidth = logo.offsetWidth;
    const elHeight = logo.offsetHeight;

    if (newLeft < window.scrollX) newLeft = window.scrollX;
    else if (newLeft + elWidth > windowWidth) newLeft = windowWidth - elWidth;

    if (newTop < window.scrollY) newTop = window.scrollY;
    else if (newTop + elHeight > windowHeight) newTop = windowHeight - elHeight;

    logo.style.left = newLeft + 'px';
    logo.style.top = newTop + 'px';
});

document.addEventListener('mouseup', function () {
    if (isDragging) {
        isDragging = false;
        logo.style.zIndex = '';
    }
});
