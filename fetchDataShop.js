const articlesProducts = document.getElementById('articles-products')
const articleProduct = document.getElementById('article-product').content;
const fragment = document.createDocumentFragment();

const addProduct = data => {
    data.forEach(product => {
        articleProduct.querySelector('h5').textContent = product.title;
        articleProduct.querySelector('p').textContent = `$${product.price}.00`;
        articleProduct.querySelector('img').setAttribute("src", product.img);
        articleProduct.querySelector('.article-product__button').dataset.id  = product.id;
    

        const clone = articleProduct.cloneNode(true);
        fragment.appendChild(clone)
    });
    articlesProducts.appendChild(fragment);
}




const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        addProduct(data)
            
        const button = document.getElementsByClassName('article-product__button')
        console.log(button)
        for(let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', (e) => {
                function setLocal() {
                    let buttonId = {
                        id: undefined
                    }
                
                    let id = e.target.dataset.id
                
                    localStorage.setItem("id", id)
                    console.log(id)
                }
                
                setLocal()
                window.location.href="/sproduct.html";

            })
        }
    } catch (error) {
        console.log(error)
    }
}



document.addEventListener('DOMContentLoaded', () => fetchData())


