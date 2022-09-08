const productDetails = document.querySelector('#product-details')
console.log(productDetails)
const productDetailsFather = document.querySelector('#product-details__father')
console.log(productDetailsFather)

const fragment = document.createDocumentFragment();

const getDetailsProduct = data => {
    console.log('Hola data')
    console.log(data)
    let id = localStorage.getItem("id")
    console.log(id + " hola perro")
    data.forEach(product => {
        if (product.id == id) {
            console.log(id + " joyañom")
            productDetails.querySelector('h5').textContent = product.title;
            productDetails.querySelector('p').textContent = `$${product.price}.00`;
            productDetails.querySelector('img').setAttribute("src", product.img);
        } 
    });
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


document.addEventListener('DOMContentLoaded', () => fetchDataSingleProduct())






