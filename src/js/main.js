const mobileBtnopen = document.getElementById('mobile-cta')
const mobileBtnClose = document.getElementById('mobile-menu-close')
const nav = document.querySelector('nav')

mobileBtnopen.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})

mobileBtnClose.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})