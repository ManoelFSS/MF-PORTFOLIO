
const icone_nave = document.querySelector('.icone_nave');
const modal_sobre = document.querySelector('.modal_sobre');
const toggle_icone = document.querySelector('.toggle_icone');
const toggle_dark = document.querySelector('.toggle_dark');
const body = document.querySelector('body');
const link = document.querySelector('.nav_bar a');

icone_nave.addEventListener('click', ()=>{
    
    if(modal_sobre.style.height === ""){
        modal_sobre.style.height = "calc(100vh - 50px";
        icone_nave.style.bottom = "calc(100vh - 150px";
    }else{
        modal_sobre.style.height = ""
        icone_nave.style.bottom = '40px';
    }
    setTimeout( ()=> icone_nave.classList.toggle('nave_rotate'), 600)

});

toggle_icone.addEventListener('click', ()=>{
    toggle_icone.classList.toggle('toggle_icone_fundo');
    body.classList.toggle('dark_model');

})