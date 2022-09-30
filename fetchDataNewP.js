const btnFav = document.getElementsByClassName('btn-fav')

const newOne = document.getElementById('new-one')
const newTwo = document.getElementById('new-two')
const newThree = document.getElementById('new-three')
const newFour = document.getElementById('new-four')
const newFive = document.getElementById('new-five')
const newSix = document.getElementById('new-six')


const getDetailsNewProduct = data => {

    newOne.querySelector('.newest-slide__description-p').textContent = data[0].title;
    newOne.querySelector('.price').textContent = `$${data[0].price}.00`;
    newOne.querySelector('.newest-slide__product-img').setAttribute("src", data[0].img);
    newOne.querySelector('.newest-slide__product-img').dataset.id  = data[0].id;
    newOne.querySelector('.newest-slide__product-img').dataset.alt  = data[0].category;
    newOne.querySelector('.btn-fav').dataset.id  = data[0].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[0].id)
        if(existProduct) {
            newOne.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }  

    newTwo.querySelector('.newest-slide__description-p').textContent = data[1].title;
    newTwo.querySelector('.price').textContent = `$${data[1].price}.00`;
    newTwo.querySelector('.newest-slide__product-img').setAttribute("src", data[1].img);
    newTwo.querySelector('.newest-slide__product-img').dataset.id  = data[1].id;
    newTwo.querySelector('.newest-slide__product-img').dataset.alt  = data[1].category;
    newTwo.querySelector('.btn-fav').dataset.id  = data[1].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[1].id)
        if(existProduct) {
            newTwo.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }  

    newThree.querySelector('.newest-slide__description-p').textContent = data[2].title;
    newThree.querySelector('.price').textContent = `$${data[2].price}.00`;
    newThree.querySelector('.newest-slide__product-img').setAttribute("src", data[2].img);
    newThree.querySelector('.newest-slide__product-img').dataset.id  = data[2].id;
    newThree.querySelector('.newest-slide__product-img').dataset.alt  = data[2].category;
    newThree.querySelector('.btn-fav').dataset.id  = data[2].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[2].id)
        if(existProduct) {
            newThree.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }  

    newFour.querySelector('.newest-slide__description-p').textContent = data[3].title;
    newFour.querySelector('.price').textContent = `$${data[3].price}.00`;
    newFour.querySelector('.newest-slide__product-img').setAttribute("src", data[3].img);
    newFour.querySelector('.newest-slide__product-img').dataset.id  = data[3].id;
    newFour.querySelector('.newest-slide__product-img').dataset.alt  = data[3].category;
    newFour.querySelector('.btn-fav').dataset.id  = data[3].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[3].id)
        if(existProduct) {
            newFour.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }  

    newFive.querySelector('.newest-slide__description-p').textContent = data[4].title;
    newFive.querySelector('.price').textContent = `$${data[4].price}.00`;
    newFive.querySelector('.newest-slide__product-img').setAttribute("src", data[4].img);
    newFive.querySelector('.newest-slide__product-img').dataset.id  = data[4].id;
    newFive.querySelector('.newest-slide__product-img').dataset.alt  = data[4].category;
    newFive.querySelector('.btn-fav').dataset.id  = data[4].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[4].id)
        if(existProduct) {
            newFive.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }  

    newSix.querySelector('.newest-slide__description-p').textContent = data[5].title;
    newSix.querySelector('.price').textContent = `$${data[5].price}.00`;
    newSix.querySelector('.newest-slide__product-img').setAttribute("src", data[5].img);
    newSix.querySelector('.newest-slide__product-img').dataset.id  = data[5].id;
    newSix.querySelector('.newest-slide__product-img').dataset.alt  = data[5].category;
    newSix.querySelector('.btn-fav').dataset.id  = data[5].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[5].id)
        if(existProduct) {
            newSix.querySelector('.btn-fav').classList.add('fill-pink')
        }
    }      

    const image = document.getElementsByClassName('newest-slide__product-img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            let nameCategory = e.target.dataset.alt
            localStorage.setItem("nameCategory", nameCategory)
            let id = e.target.dataset.id
            localStorage.setItem("id", id)
            window.location.href="/sproduct.html";
        })
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
            addToFav(data[i])
        })
    }
}


const fetchDataNewProduct = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        let dataNew = []
        data.forEach( el => {
                if(el.new == "new") {
                    dataNew.push(el)
            }
        })
        getDetailsNewProduct(dataNew)
    } catch (error) {
        console.log(error)
    } 
}

document.addEventListener('DOMContentLoaded', () => fetchDataNewProduct())
