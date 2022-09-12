
const productDetails = document.querySelector('#product-details')
const productDetailsFather = document.querySelector('#product-details__father')


const getDetailsProduct = data => {
    let id = localStorage.getItem("id")

    data.forEach(product => {
        if (product.id == id) {
            productDetails.querySelector('h5').textContent = product.title;
            productDetails.querySelector('p').textContent = `$${product.price}.00`;
            productDetails.querySelector('img').setAttribute("src", product.img);
        } 
    });
//    localStorage.removeItem("id")
    productDetailsFather.appendChild(productDetails);
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


document.addEventListener('DOMContentLoaded', () => fetchDataSingleProduct())






