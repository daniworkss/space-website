const menuBtn = document.querySelector('.burgermenu')
const navSlide = document.querySelector('.options-container')
menuBtn.addEventListener('click',()=>{
    navSlide.classList.toggle('menu-show')
    menuBtn.classList.toggle('menu-close')
})