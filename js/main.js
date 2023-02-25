const navBarMobile = document.querySelector('.navbar__mobile')
const burgerBtn = document.querySelector('.navbar__burgerBtn')
const burgerBtnIconOpen = document.querySelector('.fa-bars')
const burgerBtnIconClose = document.querySelector('.fa-xmark')

const navigationOperation = () => {
	burgerBtnIconClose.classList.toggle('disabled')
	burgerBtnIconOpen.classList.toggle('disabled')
	navBarMobile.classList.toggle('active')
}

burgerBtn.addEventListener('click', navigationOperation)
