let btn__open = document.querySelector('#btn__open')
let item__subitem = document.querySelector('.item__subitem')

btn__open.onclick = () => {
    item__subitem.classList.toggle('active')
}

let item__hover = document.querySelector('.item-hover')
let subitem__subitem = document.querySelector('.subitem__subitem')

item__hover.onclick = () => {
    subitem__subitem.classList.toggle('active')
}

