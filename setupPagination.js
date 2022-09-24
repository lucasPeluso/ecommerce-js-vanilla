const articlesProducts = document.getElementById('articles-products')
const articleProduct = document.getElementById('article-product').content;
const fragment = document.createDocumentFragment();
const numbersOfItems = document.getElementById('numbers-of-items')
const btnFav = document.getElementsByClassName('btn-fav')
let currentPage = 1;
// nro de filas = nro de objetos que se muestran por pagina
let rows = 8;

// funcion para desplegar la lista 
export function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);
    console.log(paginatedItems)
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i]
        // cargando los productos por defecto
        articleProduct.querySelector('h5').textContent = item.title;
        articleProduct.querySelector('p').textContent = `$${item.price}.00`;
        articleProduct.querySelector('p').dataset.price  = item.price;
        articleProduct.querySelector('img').setAttribute("src", item.img);
        articleProduct.querySelector('.article-product__button').dataset.id  = item.id;
        articleProduct.querySelector('.article-product__img').dataset.id  = item.id;
        articleProduct.querySelector('.btn-fav').dataset.id = item.id;
        const clone = articleProduct.cloneNode(true);
        fragment.appendChild(clone)
        wrapper.appendChild(fragment);
        // obteniendo la id de la imagen del producto seleccionado 
        const btnFav = document.getElementsByClassName('btn-fav')

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
            addToFav(items[i])
        })
    }

    numbersOfItems.innerHTML = `1 - ${rows} of ${items.length} Items`
    if (currentPage >= 2) {
    numbersOfItems.innerHTML = `${(currentPage * 8) - 7} - ${((currentPage * 8) - 8) + paginatedItems.length} of ${items.length} Items`
    }
}
//funcion para agregar botones segun se requiera
export function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";
    
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn)
    }
}

// funcion para cambiar de pagina
function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('pagination-button')
    
    if(currentPage == page) button.classList.add('active')

    
    button.addEventListener('click', function () {
        currentPage = page;
        displayList(items, articlesProducts, rows, currentPage)
        window.location.href="#"

        let currentBtn = document.querySelector('.pagination-button.active')
        currentBtn.classList.remove('active')

        button.classList.add('active')
    })

    
    return button;
}