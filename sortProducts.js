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
        articleProduct.querySelector('.btn-fav').dataset.id = product.id;
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

    const btnFav = document.getElementsByClassName('btn-fav')

    for(let i = 0; i < btnFav.length; i++) {
        btnFav[i].addEventListener('click', (e) => {
            const addToFav = (product) => {
                if(localStorage.getItem("arrFavItems")) {
                    const arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                    const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                    if(existProduct) {
                        const prod = arrFavItems.map(prod => {
                            if(prod.id === product.id) {
                                alert('The product you want to add already exists')
                            }
                        })
                    } else {
                        arrFavItems.push(product)
                        localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                        console.log(arrFavItems)
                    }
                } else {
                    const arrFavItems = [];
                    arrFavItems.push(product)
                    localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                    console.log(arrFavItems)
                }
            }      
            addToFav(data[e.target.dataset.id])
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
        articleProduct.querySelector('.btn-fav').dataset.id = product.id;
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

    const btnFav = document.getElementsByClassName('btn-fav')

    for(let i = 0; i < btnFav.length; i++) {
        btnFav[i].addEventListener('click', (e) => {
            const addToFav = (product) => {
                if(localStorage.getItem("arrFavItems")) {
                    const arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                    const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                    if(existProduct) {
                        const prod = arrFavItems.map(prod => {
                            if(prod.id === product.id) {
                                alert('The product you want to add already exists')
                            }
                        })
                    } else {
                        arrFavItems.push(product)
                        localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                        console.log(arrFavItems)
                    }
                } else {
                    const arrFavItems = [];
                    arrFavItems.push(product)
                    localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                    console.log(arrFavItems)
                }
            }       
            addToFav(data[e.target.dataset.id])
        })
    }
}

