// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає

const textArea = document.querySelector('.text');
const textAreaDescription = document.querySelector('.textarea-desc');

textArea.addEventListener('focus', () => {
    textAreaDescription.classList.add('active')
});
textArea.addEventListener('blur', () => {
    textAreaDescription.classList.remove('active')
});

// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
let url;

function getLink() {
    url = prompt('Please enter your link:');
};

function redirect() {
    if ( url.startsWith('http://') || url.startsWith('https://') ) {
        window.location.href = url;
    } else {
        url = 'https://' + url;
        window.location.href = url;
    }
    console.log(url);
};

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const table = document.getElementById('table');

for (let i = 1; i <= 10; i++) {
    const rows = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        const cols = document.createElement('td');
        const value = (i - 1) * 10 + j;
        cols.append(value);
        rows.append(cols);
    }
    table.append(rows);
};


// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const photoPlace = document.querySelector('.photo');
const photoText = document.querySelector('.photo-text');
const photoBtn = document.querySelector('.photo-btn');

const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

photoBtn.addEventListener("click", (event) => {
    photoPlace.style.backgroundColor = 'transparent';
    photoText.style.display = 'none';

    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex];

    photoPlace.style.backgroundImage = `url(img/${randomPhoto})`;
    photoPlace.style.backgroundSize = 'cover';
    photoPlace.style.backgroundRepeat = 'no-repeat';
    photoPlace.style.backgroundPosition = 'center';
});