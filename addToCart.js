const buttonDeleteAll = document.querySelector('.modal-delete-all')
const priceTotal = document.querySelector('#modal__total-price')
const cartContainer = document.getElementById('cart-container') 
const buttonCart = document.getElementById('btn-cart')
const counterCart = document.getElementById('counter-cart')

let cart = [];

cart = JSON.parse(localStorage.getItem('cart'))

buttonDeleteAll.addEventListener('click', () => {
    cart.length = 0;
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart();
})

buttonCart.addEventListener('click', () => {
    updateCart();
})


export const addToCart = (product) => {
    const existProduct = cart.some((prod) => prod.id == product.id)

    if(existProduct) {
        const prod = cart.map(prod => {
            if(prod.id === product.id) {
                alert('The product you want to add already exists')
            }
        })
    } else {
        cart.push(product)
    }
    updateCart()
}    

const deleteToCart = (prodId) => {
    const product = cart.find(product => (product.id == prodId))
    cart = cart.filter((prodId) => prodId !== product);
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart() 
}

const updateCart = () => {
    cartContainer.innerHTML = ``
    cart.forEach((product) => {
        
        const div = document.createElement('div')
        div.className = "modal-item"
        div.innerHTML = `
        <div class="modal-flex">
            <img src="${product.img}" class="modal-img" alt="">
            <div class="modal-item__title-price">
                <p class="modal-item__title">${product.title}</p>
                <p class="modal-item__price">$${product.price}.00</p>
            </div>
        </div>
        <div class="modal-flex">
            <p class="modal-amount">Amount: <span id="quantity">${product.quantity}</span></p>
            <button id="${product.id}" class="modal-delete">delete</button>
        </div>`


        cartContainer.appendChild(div)
        
        localStorage.setItem('cart', JSON.stringify(cart))

    })

    let buttonDelete = document.getElementsByClassName('modal-delete');

    for (var i = 0; i < buttonDelete.length; i++) {
        ((i) => {
            buttonDelete[i].addEventListener('click', () => {
                deleteToCart(buttonDelete[i].id)
            })
        })(i);
    }

    //nro total de productos en el carrito
    counterCart.innerText = cart.length;

    //precio total de todos los elementos en el carrito
    priceTotal.innerText = cart.reduce((acc, product) => acc + product.price, 0)
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart()
})