let header  = document.querySelector(".header")
let mobile_navbar = document.querySelector(".mobile-navbar")
let office_options = document.querySelector(".office-options")
let office_bar = document.querySelector("#bar")

mobile_navbar.addEventListener('click',()=>{
    header.classList.toggle('active')
    
})

office_bar.addEventListener('click',()=>{
    office_options.classList.toggle('office-active')
    header.classList.toggle('office-active')
    
})