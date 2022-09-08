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






