
// boton-menu 

document.querySelector('.btn').addEventListener('click',()=>{
        document.querySelector('.container-menu2').classList.toggle('show2');
})

// scroll

let scroll=document.querySelectorAll('.scroll');

function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop; 
    for(var i=0; i<scroll.length;i++){
        let alturaScroll=scroll[i].offsetTop;
        if (alturaScroll -500 < scrollTop) {
            scroll[i].style.opacity=1;
            scroll[i].classList.add("scrollArriba");
            document.querySelector('.localizacion').classList.add('scrollIzquierdo')
        }
    }
}

window.addEventListener('scroll',mostrarScroll);