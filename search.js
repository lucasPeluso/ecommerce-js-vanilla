const searchItems = document.getElementById('search-items')
const searchItem = document.getElementById('search-item').content;
const fragment = document.createDocumentFragment();
const btnFav = document.getElementsByClassName('btn-fav')
const searchValue = document.getElementById('search-value')
const searchResults = document.getElementById('search-results')
// funcion para desplegar la lista 
function getSearchResults() {

    let searchKey = localStorage.getItem('search value')
    let newData = JSON.parse(localStorage.getItem('search product'))
    searchResults.textContent = newData.length;
    searchValue.textContent = searchKey


    for (let i = 0; i < newData.length; i++) {
        let item = newData[i]
        // cargando los productos por defecto
        searchItem.querySelector('h5').textContent = item.title;
        searchItem.querySelector('p').textContent = `$${item.price}.00`;
        searchItem.querySelector('p').dataset.price  = item.price;
        searchItem.querySelector('img').setAttribute("src", item.img);
        searchItem.querySelector('.article-product__button').dataset.id  = item.id;
        searchItem.querySelector('.article-product__button').dataset.value  = item.category;
        searchItem.querySelector('.article-product__img').dataset.id  = item.id;
        searchItem.querySelector('.article-product__img').dataset.alt  = item.category;
        searchItem.querySelector('.btn-fav').dataset.id = item.id;
        if(localStorage.getItem("arrFavItems")) {
            let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
            const existProduct = arrFavItems.some((prod) => prod.id == item.id)
            if(existProduct) {
                searchItem.querySelector('.btn-fav').classList.add('fill-pink')
            } else {
                searchItem.querySelector('.btn-fav').classList.remove('fill-pink')
            }
        }  

        const clone = searchItem.cloneNode(true);
        fragment.appendChild(clone)
        searchItems.appendChild(fragment);
        // obteniendo la id de la imagen del producto seleccionado 

        const image = document.getElementsByClassName('article-product__img')
        for(let i = 0; i < image.length; i++) {
            image[i].addEventListener('click', (e) => {
                let nameCategory = e.target.dataset.alt
                localStorage.setItem("nameCategory", nameCategory)
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
                window.location.href="/sproduct.html";
            })
        }
        
        const button = document.getElementsByClassName('article-product__button')
        for(let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', (e) => {
                let nameCategory = e.target.dataset.value
                localStorage.setItem("nameCategory", nameCategory)
                let id = e.target.dataset.id
                localStorage.setItem("id", id)
                window.location.href="/sproduct.html";
            })
        } 
        
    }


    for(let i = 0; i < btnFav.length; i++) {
        btnFav[i].addEventListener('click', (e) => {
            btnFav[i].classList.add('fill-pink')
            const addToFav = (product) => {
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
            addToFav(items[i])
        })
    }
}

document.addEventListener('DOMContentLoaded', () => getSearchResults())
