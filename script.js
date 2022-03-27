"use strict"

let menuBtn = document.getElementsByClassName('menu-btn')
let burgerMenu = document.querySelector('.burger-menu')
let burgerMenu2 = document.querySelector('.burger-menu-2')
let contactLink = document.getElementById('contact-link')
let navMenu = document.getElementById('nav-menu')

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', openBurgerMenu)
}

function openBurgerMenu() {
    let psevdoElemOfBurgerMenu = burgerMenu2.nextElementSibling
    if (psevdoElemOfBurgerMenu.style.display === 'none') {
        burgerMenu2.style.transform = 'rotate(0)'
        burgerMenu.style.transform = 'rotate(0)'
        psevdoElemOfBurgerMenu.style.display = 'block'
        navMenu.style.display = 'none'
        contactLink.style.display = 'inline'
    } else {
        psevdoElemOfBurgerMenu.style.display = 'none'
        burgerMenu2.style.transform = 'rotate(45deg)'
        burgerMenu.style.transform = 'rotate(-45deg)'
        navMenu.style.display = 'block'
        contactLink.style.display = 'none'

    }
}