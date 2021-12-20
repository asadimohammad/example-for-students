const hamburgerMenu = document.querySelector('.hamburger-menu') , 
      menu = document.querySelector('.menu')

eventListeners()
function eventListeners(){
    hamburgerMenu.addEventListener('click' , addToggle)
}
function addToggle(e){
    hamburgerMenu.classList.toggle('on')
}