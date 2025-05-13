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