const trendingOne = document.getElementById('trending-one')
const trendingTwo = document.getElementById('trending-two')
const trendingThree = document.getElementById('trending-three')

const getDetailsTrendProduct = data => {

    let numberOne = Math.round(Math.random() * 42)
    let numberTwo = Math.round(Math.random() * 42)
    let numberThree = Math.round(Math.random() * 42)

    if (numberOne === numberTwo) numberOne += 1
    if (numberOne === numberThree) numberOne += 1
    if (numberTwo === numberThree) numberTwo += 1

    trendingOne.querySelector('.trending-product__description-p').textContent = data[numberOne].title;
    trendingOne.querySelector('.price').textContent = `$${data[numberOne].price}.00`;
    trendingOne.querySelector('img').setAttribute("src", data[numberOne].img);
    trendingOne.querySelector('img').dataset.id  = data[numberOne].id;

    trendingTwo.querySelector('.trending-product__description-p').textContent = data[numberTwo].title;
    trendingTwo.querySelector('.price').textContent = `$${data[numberTwo].price}.00`;
    trendingTwo.querySelector('img').setAttribute("src", data[numberTwo].img);
    trendingTwo.querySelector('img').dataset.id  = data[numberTwo].id;

    trendingThree.querySelector('.trending-product__description-p').textContent = data[numberThree].title;
    trendingThree.querySelector('.price').textContent = `$${data[numberThree].price}.00`;
    trendingThree.querySelector('img').setAttribute("src", data[numberThree].img);
    trendingThree.querySelector('img').dataset.id  = data[numberThree].id;

    const image = document.getElementsByClassName('trending-product__img')
    for(let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', (e) => {
            localStorage.removeItem("nameCategory")
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
