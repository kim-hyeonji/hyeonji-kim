const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const toggleBtn2 = document.querySelector('.iconLink');
const menu2 = document.querySelector('.pagesMenuContainer');
const icons2 = document.querySelector('.snsMenuContainer');

toggleBtn2.addEventListener('click', () => {
    menu2.classList.toggle('active');
    icons2.classList.toggle('active');
});