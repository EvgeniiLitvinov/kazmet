const navBtn = document.querySelector('.nav__item')
const navMenu = document.querySelector('.nav__menu')
const mainBlock = document.querySelector('.main')
const headerBlock = document.querySelector('.header')
const afterNav = document.querySelector('.nav__item-rectangle')

navBtn.addEventListener('click', function(e) {
    navMenu.classList.toggle('menu__visible')
    navBtn.classList.toggle('hover__effect')
    afterNav.classList.toggle('transform')
    e.stopPropagation()
})



window.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
        navMenu.classList.remove('menu__visible')
        navBtn.classList.remove('hover__effect')
        afterNav.classList.remove('transform')
    }
})

mainBlock.addEventListener('click', function() {
    navMenu.classList.remove('menu__visible')
    navBtn.classList.remove('hover__effect')
    afterNav.classList.remove('transform')
})

headerBlock.addEventListener('click', function() {
    navMenu.classList.remove('menu__visible')
    navBtn.classList.remove('hover__effect')
    afterNav.classList.remove('transform')
})

// SLIDE

const copy = document.querySelector('.logos-slide').cloneNode(true)
document.querySelector('.logos').appendChild(copy)

// BURGER

const menuBurger = document.querySelector('.burger')
const navigation = document.querySelector('.header__nav')
const burgerClose = document.querySelector('.burger-close')
const burgerMenu = document.querySelector('.burger-menu')
const languageBtns = document.querySelector('.language-btns')
const footerBurger = document.querySelector('.footer__burger')

menuBurger.addEventListener('click', function(e) {
    menuBurger.classList.toggle('active')
    navigation.classList.toggle('open')
    burgerClose.classList.toggle('open-burger')
    burgerMenu.classList.toggle('close-burger')
    languageBtns.classList.toggle('open-language-btns')
    footerBurger.classList.toggle('footer__burger-active')
})

// SLIDER 






const slider = document.querySelector('.internship__container')
const prevBtn = document.querySelector('.pre-btn')
const nextBtn = document.querySelector('.next-btn')

let currentSlide = 0
const totalSlides = document.querySelectorAll('.internships-slider').length
let visibleSlides = 3
let slideWidth = 370


function updateVisibleSlides() {
    if (window.innerWidth <= 900) {
    visibleSlides = 1
    } else {
    visibleSlides = 3
    }
    updateSliderPosition()
    checkButtonsVisibility()
}


function updateSliderPosition() {
  const offset = -currentSlide * slideWidth
    slider.style.transform = `translateX(${offset}px)`
}


function checkButtonsVisibility() {
    if (currentSlide >= totalSlides - visibleSlides) {
    nextBtn.classList.add('hidden')
    } else {
    nextBtn.classList.remove('hidden')
    }

    if (currentSlide <= 0) {
    prevBtn.classList.add('hidden')
    } else {
    prevBtn.classList.remove('hidden')
    }
}


nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - visibleSlides) {
    currentSlide++
    updateSliderPosition()
    }
    checkButtonsVisibility()
})

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
    currentSlide--
    updateSliderPosition()
    }
    checkButtonsVisibility()
})


let startX = 0
let isDragging = false

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    isDragging = true
})

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diffX = startX - currentX

    if (diffX > 50) {
    if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++
    }
    } else if (diffX < -50) {
    if (currentSlide > 0) {
        currentSlide--
    }
    }
    updateSliderPosition()
    checkButtonsVisibility()
    isDragging = false
})

slider.addEventListener('touchend', () => {
    isDragging = false
})


updateVisibleSlides()
window.addEventListener('resize', updateVisibleSlides)


checkButtonsVisibility()





