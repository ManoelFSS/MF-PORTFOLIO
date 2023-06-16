
const icone_nave = document.querySelector('.icone_nave');
const modal_sobre = document.querySelector('.modal_sobre');

icone_nave.addEventListener('click', ()=>{
    
    if(modal_sobre.style.height === ""){
        modal_sobre.style.height = "calc(100vh - 50px";
        icone_nave.style.bottom = "calc(100vh - 100px";
    }else{
        modal_sobre.style.height = ""
        icone_nave.style.bottom = '40px';
    }
    setTimeout( ()=> icone_nave.classList.toggle('nave_rotate'), 600)

});