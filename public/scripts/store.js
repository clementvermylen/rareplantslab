const burger = document.querySelector('.nav-burger')
const burgerMenu = document.querySelector('.burger-dropdown')

const profile = document.querySelector('.nav-profile')
const profileMenu = document.querySelector('.profile-dropdown')

burger.addEventListener("click", () => {
    if (burger.classList.contains('rotate')) {
        burger.classList.remove('rotate')
        burgerMenu.classList.remove('drop')
    }
    else {
        burger.classList.add('rotate')
        burgerMenu.classList.add('drop')
    }
})

profile.addEventListener("click", () => {
    if (profile.classList.contains('rotate')) {
        profile.classList.remove('rotate')
        profileMenu.classList.remove('drop')
    }
    else {
        profileMenu.classList.add('drop')
    }
})
