
import { addToCart } from "./addToCart.js";

const productDetails = document.querySelector('#product-details')
const rootCategory = document.getElementById('root-category')
const rootNameItem = document.getElementById('root-name-item')
const labelColor = document.getElementById('label-color')
const sizesContainer = document.getElementById('sizes')

const quantityNumber = document.getElementById('quantity-number')

let buttonSubtraction = document.getElementById('btn-subtraction')
let buttonSum = document.getElementById('btn-sum')

const getDetailsProduct = data => {
    let id = localStorage.getItem("id")
    
    let nameCategory = localStorage.getItem("nameCategory")

    data.forEach(product => {
        if (product.id == id) {

            let nameCategory = product.category
            localStorage.setItem("nameCategory", nameCategory)

            rootCategory.textContent = product.category.toUpperCase()

            let itemColors = product.color;

            for(let i = 0; i < itemColors.length; i++) {
                labelColor.innerHTML += `<label class="product-details__input-container">
                                            <p class="product-details__colors">${itemColors[i]}</p>
                                            <input class="product-details__input" type="radio" name="radio">
                                            <span class="product-details__input-check"></span>
                                        </label>`
            }

            let itemSizes = product.sizes;

            for(let i = 0; i < itemSizes.length; i++) {
                sizesContainer.innerHTML += `<label class="product-details__sizes-label">
                                                <input class="product-details__size-input" type="radio" name="sizes">
                                                <p class="product-details__size">Size ${itemSizes[i]}</p>
                                            </label>`
            }
            
            rootNameItem.innerHTML = `${product.title}`.toUpperCase();
            productDetails.querySelector('h5').textContent = product.title;
            productDetails.querySelector('p').textContent = `$${product.price}.00`;
            productDetails.querySelector('img').setAttribute("src", product.img); 
            productDetails.querySelector('.btn-fav').dataset.id = product.id;
            if(localStorage.getItem("arrFavItems")) {
                let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                if(existProduct) {
                    productDetails.querySelector('.btn-fav').classList.add('fill-pink')
                }
            }  

            buttonSubtraction.addEventListener('click', () => {
                if(quantityNumber.textContent == 1) {
                    quantityNumber.textContent == 1
                } else {
                    quantityNumber.textContent--
                }
                product.quantity = quantityNumber.textContent

            })
            
            buttonSum.addEventListener('click', () => {
                if(quantityNumber.textContent < 99) {
                    quantityNumber.textContent++
                } 
                product.quantity = quantityNumber.textContent
            })
            
            
            const buttonAddCart = document.querySelector('.product-details__button-cart-a');
            buttonAddCart.addEventListener('click', () => {
                addToCart(product)
            })

            const btnFav = document.getElementsByClassName('btn-fav')

            let i = 0
            btnFav[i].addEventListener('click', (e) => {
                console.log('hola perro')
                console.log(product)
                const addToFav = (product) => {
                    btnFav[i].classList.add('fill-pink')
                    if(localStorage.getItem("arrFavItems")) {
                        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                        const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                        if(existProduct) {
                            const prod = arrFavItems.map(prod => {
                                if(prod.id === product.id) {
                                    btnFav[i].classList.remove('fill-pink')
                                    arrFavItems = arrFavItems.filter((prod) => prod.id !== product.id);
                                    localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                                }
                            })
                        } else {
                            arrFavItems.push(product)
                            localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                            console.log(arrFavItems)
                        }
                    } else {
                        let arrFavItems = [];
                        arrFavItems.push(product)
                        localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                        console.log(arrFavItems)
                    }
                }    
                addToFav(product)
            })
        } 

    });

}

const fetchDataSingleProduct = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();

        getDetailsProduct(data)
    } catch (error) {
        console.log(error)
    } 
}

// ***************** Menu Links ***************** //

document.addEventListener('DOMContentLoaded', () => fetchDataSingleProduct())






