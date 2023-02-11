const menuBtn = document.querySelector('.menu-btn'),
closeBtn = document.querySelector('.close-btn'),
mobailNavSec = document.querySelector('.mobail-nav-sec'),
body = document.querySelector('body')

menuBtn.addEventListener('click',()=>{
    mobailNavSec.classList.toggle('active')
    body.classList.toggle('active')
})
closeBtn.addEventListener('click',()=>{
    mobailNavSec.classList.remove('active')
    body.classList.remove('active')
})