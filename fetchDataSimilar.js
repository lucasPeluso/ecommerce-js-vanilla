const similarOne = document.getElementById('similar-one')
const similarTwo = document.getElementById('similar-two')
const similarThree = document.getElementById('similar-three')
const btnFavSimilar = document.getElementsByClassName('btn-fav__similar')

const getDetailsSimilarProduct = data => {

    let id = localStorage.getItem("id")

    let numberOne = Math.round(Math.random() * (data.length - 2))
    let numberTwo = Math.round(Math.random() * (data.length - 2))
    let numberThree = Math.round(Math.random() * (data.length - 2))

    if (data[numberOne].id == id) numberOne += 1
    if (data[numberTwo].id == id) numberTwo += 1
    if (data[numberThree].id == id) numberThree += 1

    if (numberOne == numberTwo ) numberOne += 1
    if (numberOne == numberThree ) numberOne += 1
    if (numberTwo == numberThree ) numberTwo += 1
    if (numberOne == numberTwo ) numberOne += 1

    similarOne.querySelector('.similar-product__description-p').textContent = data[numberOne].title;
    similarOne.querySelector('.price').textContent = `$${data[numberOne].price}.00`;
    similarOne.querySelector('img').setAttribute("src", data[numberOne].img);
    similarOne.querySelector('img').dataset.id  = data[numberOne].id;
    similarOne.querySelector('.btn-fav__similar').dataset.id  = data[numberOne].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberOne].id)
        if(existProduct) {
            similarOne.querySelector('.btn-fav__similar').classList.add('fill-pink')
        }
    }  

    similarTwo.querySelector('.similar-product__description-p').textContent = data[numberTwo].title;
    similarTwo.querySelector('.price').textContent = `$${data[numberTwo].price}.00`;
    similarTwo.querySelector('img').setAttribute("src", data[numberTwo].img);
    similarTwo.querySelector('img').dataset.id  = data[numberTwo].id;
    similarTwo.querySelector('.btn-fav__similar').dataset.id  = data[numberTwo].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberTwo].id)
        if(existProduct) {
            similarTwo.querySelector('.btn-fav__similar').classList.add('fill-pink')
        }
    }  

    similarThree.querySelector('.similar-product__description-p').textContent = data[numberThree].title;
    similarThree.querySelector('.price').textContent = `$${data[numberThree].price}.00`;
    similarThree.querySelector('img').setAttribute("src", data[numberThree].img);
    similarThree.querySelector('img').dataset.id  = data[numberThree].id;
    similarThree.querySelector('.btn-fav__similar').dataset.id  = data[numberThree].id;
    if(localStorage.getItem("arrFavItems")) {
        let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
        const existProduct = arrFavItems.some((prod) => prod.id == data[numberThree].id)
        if(existProduct) {
            similarThree.querySelector('.btn-fav__similar').classList.add('fill-pink')
        }
    }  

    const image = document.getElementsByClassName('similar-product__img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            let id = e.target.dataset.id
            localStorage.setItem("id", id)
            window.location.href="/sproduct.html";
        })
    }

    for(let i = 0; i < btnFavSimilar.length; i++) {
        btnFavSimilar[i].addEventListener('click', (e) => {
            const addToFav = (product) => {
                btnFavSimilar[i].classList.add('fill-pink')
                if(localStorage.getItem("arrFavItems")) {
                    let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
                    const existProduct = arrFavItems.some((prod) => prod.id == product.id)
                    if(existProduct) {
                        const prod = arrFavItems.map(prod => {
                            if(prod.id === product.id) {
                                btnFavSimilar[i].classList.remove('fill-pink')
                                arrFavItems = arrFavItems.filter((prod) => prod.id !== product.id);
                                localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                            }
                        })
                    } else {
                        arrFavItems.push(product)
                        localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                    }
                } else {
                    let arrFavItems = [];
                    arrFavItems.push(product)
                    localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
                }
            }    
            addToFav(data[e.target.dataset.id - 1])
        })
    }
}


const fetchDataSimilarProduct = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
         // obteniendo la data correspondiente a la categoria elegida
        let nameCategory = localStorage.getItem("nameCategory")
        if(nameCategory == "Sweaters") {
            const dataSweatersOnly = data.filter(({category}) => category === 'Sweaters');
             // localStorage.removeItem("nameCategory")
            getDetailsSimilarProduct(dataSweatersOnly)
        } else if(nameCategory == "Shoes") {
            const dataShoesOnly = data.filter(({category}) => category === 'Shoes');
             // localStorage.removeItem("nameCategory")
            getDetailsSimilarProduct(dataShoesOnly)
        } else if(nameCategory == "Shorts") {
            const dataShortsOnly = data.filter(({category}) => category === 'Shorts');
             // localStorage.removeItem("nameCategory")
            getDetailsSimilarProduct(dataShortsOnly)
        } else if(nameCategory == "Jewellery") {
            const dataJewelleryOnly = data.filter(({category}) => category === 'Jewellery');
             // localStorage.removeItem("nameCategory")
            getDetailsSimilarProduct(dataJewelleryOnly)
        } else {
             // localStorage.removeItem("nameCategory")
            getDetailsSimilarProduct(data)
        }
    } catch (error) {
        console.log(error)
    } 
}

document.addEventListener('DOMContentLoaded', () => fetchDataSimilarProduct())