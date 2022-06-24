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
    if (profile.classList.contains('droptag')) {
        profileMenu.classList.remove('drop')
        profile.classList.remove('droptag')
    }
    else {
        profileMenu.classList.add('drop')
        profile.classList.add('droptag')
    }
})