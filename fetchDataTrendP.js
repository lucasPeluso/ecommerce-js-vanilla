const trendingOne = document.getElementById('trending-one')
const trendingTwo = document.getElementById('trending-two')
const trendingThree = document.getElementById('trending-three')
const btnFavTrend = document.getElementsByClassName('btn-fav__trend')

const getDetailsTrendProduct = data => {

    let numberOne = Math.round(Math.random() * (data.length - 2))
    let numberTwo = Math.round(Math.random() * (data.length - 2))
    let numberThree = Math.round(Math.random() * (data.length - 2))

    if (numberOne === numberTwo) numberOne += 1
    if (numberOne === numberThree) numberOne += 1
    if (numberTwo === numberThree) numberTwo += 1

    trendingOne.querySelector('.trending-product__description-p').textContent = data[numberOne].title;
    trendingOne.querySelector('.price').textContent = `$${data[numberOne].price}.00`;
    trendingOne.querySelector('img').setAttribute("src", data[numberOne].img);
    trendingOne.querySelector('img').dataset.id  = data[numberOne].id;
    trendingOne.querySelector('img').dataset.alt  = data[numberOne].category;
    trendingOne.querySelector('.btn-fav__trend').dataset.id  = data[numberOne].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberOne].id)
        if(existProduct) {
            trendingOne.querySelector('.btn-fav__trend').classList.add('fill-pink')
        }
    }  

    trendingTwo.querySelector('.trending-product__description-p').textContent = data[numberTwo].title;
    trendingTwo.querySelector('.price').textContent = `$${data[numberTwo].price}.00`;
    trendingTwo.querySelector('img').setAttribute("src", data[numberTwo].img);
    trendingTwo.querySelector('img').dataset.id  = data[numberTwo].id;
    trendingTwo.querySelector('img').dataset.alt  = data[numberTwo].category;
    trendingTwo.querySelector('.btn-fav__trend').dataset.id  = data[numberTwo].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberTwo].id)
        if(existProduct) {
            trendingTwo.querySelector('.btn-fav__trend').classList.add('fill-pink')
        }
    }  

    trendingThree.querySelector('.trending-product__description-p').textContent = data[numberThree].title;
    trendingThree.querySelector('.price').textContent = `$${data[numberThree].price}.00`;
    trendingThree.querySelector('img').setAttribute("src", data[numberThree].img);
    trendingThree.querySelector('img').dataset.id  = data[numberThree].id;
    trendingThree.querySelector('img').dataset.alt  = data[numberThree].category;
    trendingThree.querySelector('.btn-fav__trend').dataset.id  = data[numberThree].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberThree].id)
        if(existProduct) {
            trendingThree.querySelector('.btn-fav__trend').classList.add('fill-pink')
        }
    }  



    const image = document.getElementsByClassName('trending-product__img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            let nameCategory = e.target.dataset.alt
            localStorage.setItem("nameCategory", nameCategory)
            let id = e.target.dataset.id
            localStorage.setItem("id", id)
            window.location.href="/sproduct.html";
        })
    }

    for(let i = 0; i < btnFavTrend.length; i++) {
        btnFavTrend[i].addEventListener('click', (e) => {
            const addToFav = (product) => {
                btnFavTrend[i].classList.add('fill-pink')
                if(localStorage.getItem("arrFavItems")) {
                    let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                    const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                    if(existProduct) {
                        const prod = arrFavItems.map(prod => {
                            if(prod.id === product.id) {
                                btnFavTrend[i].classList.remove('fill-pink')
                                console.log(arrFavItems)
                                arrFavItems = arrFavItems.filter((prod) => prod.id !== product.id);
                                console.log(arrFavItems)
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
            addToFav(data[e.target.dataset.id - 1])
        })
    }
}


const fetchDataTrendProduct = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        getDetailsTrendProduct(data)
    } catch (error) {
        console.log(error)
    } 
}

document.addEventListener('DOMContentLoaded', () => fetchDataTrendProduct())
