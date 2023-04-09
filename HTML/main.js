
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');


abrir.addEventListener('click', () =>{
    nav.classList.add('visible')
})

cerrar.addEventListener('click',() =>{
    nav.classList.remove('visible')
})



ScrollReveal().reveal('.about' , {delay: 200});

ScrollReveal().reveal('.grid' , {delay: 200});


ScrollReveal().reveal('.lenguajes' , {delay: 200});

ScrollReveal().reveal('.proyects' , {delay: 200});


ScrollReveal().reveal('.grid-contenido' , {delay: 200});






