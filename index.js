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
document.getElementById('startDialogButton').addEventListener('click', userDialog);


function displayDeveloperInfo(lastName, firstName, position = 'Розробник') {
    alert(`Інформація про розробника:
    Прізвище: ${lastName}
    Ім'я: ${firstName}
    Посада: ${position}`);
}
document.getElementById("showInfoButton").addEventListener("click", function () {
    displayDeveloperInfo("Понзель", "Тетяна");
});


function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2 > str1) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові!");
    }
}
document.getElementById("compareStringsButton").addEventListener("click", function () {
    const firstString = prompt("Введіть перший рядок:");
    const secondString = prompt("Введіть другий рядок:");
    compareStrings(firstString, secondString);
});


document.getElementById('changeBackgroundBtn').addEventListener('click', function () {
    let originalBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#215e54';
    setTimeout(function () {
        document.body.style.backgroundColor = originalBackground;
    }, 30000);
});


document.getElementById('redirectBtn').addEventListener('click', function () {
    location.href = 'https://www.youtube.com/watch?v=zCSRlLnX9RI';
});


const images = document.querySelectorAll('img');
images.forEach(function (image) {
    image.addEventListener('mouseenter', function () {
        images.forEach(function (img) {
            img.style.border = '5px solid orange';
        });
    });

    image.addEventListener('mouseleave', function () {
        images.forEach(function (img) {
            img.style.border = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    console.log("innerHTML:", heading.innerHTML);
    heading.innerHTML = "<span style='color: orange;'>Вітаємо в музичному світі!</span>";

    const logo = document.querySelector(".logo");
    console.log("outerHTML:", logo.outerHTML);

    const description = document.querySelector(".intro-text p");
    console.log("textContent:", description.textContent);
    description.textContent = "🎼 Оновлений текст без HTML-тегів 🎼";

    const tableCaption = document.querySelector("caption");
    const textNode = tableCaption.firstChild;
    console.log("nodeValue:", textNode.nodeValue);
    textNode.nodeValue = "🎵 Жанри музики (оновлено через nodeValue)";

});

document.addEventListener("DOMContentLoaded", () => {
    //document.write("<p style='color:red;'>Це додано через document.write</p>");

    const newParagraph = document.createElement("p");
    const paragraphText = document.createTextNode("Цей абзац створено за допомогою createElement та createTextNode.");
    newParagraph.appendChild(paragraphText);
    const intro = document.querySelector(".intro-text");
    intro.append(newParagraph);

    const firstNote = document.createElement("p");
    firstNote.textContent = "Це вставлено на початку блоку intro-text за допомогою prepend.";
    intro.prepend(firstNote);

    const afterHeading = document.createElement("p");
    afterHeading.textContent = "Це вставлено після заголовка за допомогою after";
    const heading = document.getElementById("heading");
    heading.after(afterHeading);

    const logo = document.querySelector(".logo");
    const newLogo = document.createElement("p");
    newLogo.textContent = "🎤 Новий логотип, створений за допомогою replaceWith";
    newLogo.style.color = "darkblue";
    logo.replaceWith(newLogo);

    const lastImage = document.querySelectorAll("img")[3];
    if (lastImage) {
        lastImage.remove();
    }
});