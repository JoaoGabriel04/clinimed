document.getElementById("btn-menu").addEventListener('click', (event)=> {

    event.preventDefault();
    let menu = document.getElementById("navbar");
    let blur = document.querySelector(".menu-back");

    menu.classList.add('active');
    blur.classList.add('active');

})

document.querySelector(".menu-back").addEventListener('click', ()=>{

    let menu = document.getElementById("navbar");
    let blur = document.querySelector(".menu-back");

    menu.classList.remove('active');
    blur.classList.remove('active');

})