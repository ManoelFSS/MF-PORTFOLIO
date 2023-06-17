// seleçao de class
const icone_nave = document.querySelector('.icone_nave');
const modal_sobre = document.querySelector('.modal_sobre');
const toggle_icone = document.querySelector('.toggle_icone');
const toggle_dark = document.querySelector('.toggle_dark');
const body = document.querySelector('body');
const nav_bar = document.querySelector('.nav_bar');
const link = document.querySelectorAll('.nav_bar a');
const nav = document.querySelector('nav');
const menu_mobile = document.querySelector('.menu_mobile');
const btn_contato = document.querySelector('.contato');
const modal_contato = document.querySelector('.modal_contato');
const btn_modal_contato_close = document.querySelector('.modal_contato_close');

// btn nave e funçao abre e fecha modal
icone_nave.addEventListener('click', ()=>{
   
    if(modal_sobre.style.height === ""){
        modal_sobre.style.height = "calc(100vh - 50px";
        icone_nave.style.bottom = "calc(100vh - 150px";
    }else{
        modal_sobre.style.height = ""
        icone_nave.style.bottom = '40px';
    }
    // funçao executa animaçao rotaçao do btn da nave
    setTimeout( ()=> icone_nave.classList.toggle('nave_rotate'), 600);

});

 // btn dark model  ativa / desativa
toggle_icone.addEventListener('click', ()=>{
    nav_bar.classList.toggle('dark_model');
    nav.classList.toggle('dark_model');
    toggle_icone.classList.toggle('toggle_icone_fundo');
    body.classList.toggle('dark_model');
    modal_sobre.classList.toggle('dark_model');
    modal_contato.classList.toggle('dark_model');

});

// btn toggle abre e fecha menu
menu_mobile.addEventListener('click', ()=>{

    menu_mobile.classList.toggle("menu_toggle");

    if( nav.style.right == '0px'){
        nav.style.right = '-180px'
    }else{
        nav.style.right = '0px'
    }
   
});


btn_modal_contato_close.addEventListener('click', ()=>{
    modal_contato.style.display = 'none'
});

btn_contato.addEventListener('click', ()=>{
    modal_contato.style.display = 'flex'
});

link.forEach((item)=>{
    item.addEventListener("click", ()=>{
        for(let i = 0; i < link.length; i++){
            link[i].classList.remove('ativo');
        }
        item.classList.add('ativo');
    });
});