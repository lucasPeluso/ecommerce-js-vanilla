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
            if(nameCategory == "category-sweaters" || nameCategory == "menu-sweaters") {
                rootCategory.innerHTML = `SWEATERS`;
            } else if(nameCategory == "category-shoes" || nameCategory == "menu-shoes") {
                rootCategory.innerHTML = `SHOES`
            } else if(nameCategory == "category-shorts" || nameCategory == "menu-shorts") {
                rootCategory.innerHTML = `SHORTS`
            } else if(nameCategory == "menu-jewellery") {
                rootCategory.innerHTML = `JEWELLERY`
            } else {
                // localStorage.removeItem("nameCategory")
                rootCategory.innerHTML = `EXPLORE ALL`
            }

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

            buttonSubtraction.addEventListener('click', () => {
                if(quantityNumber.textContent == 1) {
                    quantityNumber.textContent == 1
                } else {
                    quantityNumber.textContent--
                }
                console.log('hola resta')
                product.quantity = quantityNumber.textContent

            })
            
            buttonSum.addEventListener('click', () => {
                if(quantityNumber.textContent < 99) {
                    quantityNumber.textContent++
                } 
                console.log('hola suma')
                product.quantity = quantityNumber.textContent
            })
            
            
            const buttonAddCart = document.querySelector('.product-details__button-cart-a');
            buttonAddCart.addEventListener('click', () => {
                addToCart(product)
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

const sweatersLink = document.getElementById('menu-sweaters')
const shortsLink = document.getElementById('menu-shorts')
const shoesLink = document.getElementById('menu-shoes')
const exploreLink = document.getElementById('menu-explore')
const jewelleryLink = document.getElementById('menu-jewellery')

jewelleryLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

exploreLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

sweatersLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shortsLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shoesLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})


document.addEventListener('DOMContentLoaded', () => {
    fetchDataSingleProduct()
})






