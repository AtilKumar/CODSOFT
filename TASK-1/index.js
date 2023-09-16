let cont = document.querySelector(".popup")
let elem = document.querySelector(".overlay")
let x = document.querySelector(".card")

function expand(){
    cont.setAttribute('style', "background-color: rgb(13, 13, 13); scale: 1; z-index: 20; transition: all 500ms ease;")
    elem.setAttribute('style', "visibility: initial;")
    x.setAttribute('style',"opacity: 0.4;")
}

function shrink(){
    cont.setAttribute('style',"scale: 0; transition: all 500ms ease;")
    elem.setAttribute('style',"visibility: hidden;")
    x.setAttribute('style',"opacity: 1;")
}