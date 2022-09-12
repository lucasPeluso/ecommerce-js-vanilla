const articlesProducts = document.getElementById('articles-products')
const articleProduct = document.getElementById('article-product').content;
const fragment = document.createDocumentFragment();

export function sortElemTitle(data) {
    data.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    })
    while(articlesProducts.firstChild) {
        articlesProducts.removeChild(articlesProducts.firstChild)
    }

    data.forEach(product => {
        articleProduct.querySelector('h5').textContent = product.title;
        articleProduct.querySelector('p').textContent = `$${product.price}.00`;
        articleProduct.querySelector('p').dataset.price  = product.price;
        articleProduct.querySelector('img').setAttribute("src", product.img);
        articleProduct.querySelector('.article-product__button').dataset.id  = product.id;
        articleProduct.querySelector('.article-product__img').dataset.id  = product.id;
    
        const clone = articleProduct.cloneNode(true);
        fragment.appendChild(clone)
    });
    articlesProducts.appendChild(fragment);
    
    const image = document.getElementsByClassName('article-product__img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            function setLocalImage() {
                let imageId = {
                    id: undefined
                }
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
            }
            setLocalImage()
            window.location.href="/sproduct.html";
        })
    }
    
    const button = document.getElementsByClassName('article-product__button')
    for(let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (e) => {
            function setLocalButton() {
                let buttonId = {
                    id: undefined
                }
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
            }
            setLocalButton()
            window.location.href="/sproduct.html";
        })
    }
}

export function sortElemPrice(data, asc) {
    let dm = asc ? 1 : -1;
    data.sort((a, b) => {
        const ax = a.price
        const bx = b.price
        return ax > bx ? (1*dm) : (-1*dm)
    })
    while(articlesProducts.firstChild) {
        articlesProducts.removeChild(articlesProducts.firstChild)
    }

    data.forEach(product => {
        articleProduct.querySelector('h5').textContent = product.title;
        articleProduct.querySelector('p').textContent = `$${product.price}.00`;
        articleProduct.querySelector('p').dataset.price  = product.price;
        articleProduct.querySelector('img').setAttribute("src", product.img);
        articleProduct.querySelector('.article-product__button').dataset.id  = product.id;
        articleProduct.querySelector('.article-product__img').dataset.id  = product.id;
    
        const clone = articleProduct.cloneNode(true);
        fragment.appendChild(clone)
    });
    articlesProducts.appendChild(fragment);
    
    const image = document.getElementsByClassName('article-product__img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            function setLocalImage() {
                let imageId = {
                    id: undefined
                }
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
            }
            setLocalImage()
            window.location.href="/sproduct.html";
        })
    }
    
    const button = document.getElementsByClassName('article-product__button')
    for(let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (e) => {
            function setLocalButton() {
                let buttonId = {
                    id: undefined
                }
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
            }
            setLocalButton()
            window.location.href="/sproduct.html";
        })
    }
}

