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

    newTwo.querySelector('.newest-slide__description-p').textContent = data[1].title;
    newTwo.querySelector('.price').textContent = `$${data[1].price}.00`;
    newTwo.querySelector('.newest-slide__product-img').setAttribute("src", data[1].img);
    newTwo.querySelector('.newest-slide__product-img').dataset.id  = data[1].id;

    newThree.querySelector('.newest-slide__description-p').textContent = data[2].title;
    newThree.querySelector('.price').textContent = `$${data[2].price}.00`;
    newThree.querySelector('.newest-slide__product-img').setAttribute("src", data[2].img);
    newThree.querySelector('.newest-slide__product-img').dataset.id  = data[2].id;

    newFour.querySelector('.newest-slide__description-p').textContent = data[3].title;
    newFour.querySelector('.price').textContent = `$${data[3].price}.00`;
    newFour.querySelector('.newest-slide__product-img').setAttribute("src", data[3].img);
    newFour.querySelector('.newest-slide__product-img').dataset.id  = data[3].id;

    newFive.querySelector('.newest-slide__description-p').textContent = data[4].title;
    newFive.querySelector('.price').textContent = `$${data[4].price}.00`;
    newFive.querySelector('.newest-slide__product-img').setAttribute("src", data[4].img);
    newFive.querySelector('.newest-slide__product-img').dataset.id  = data[4].id;

    newSix.querySelector('.newest-slide__description-p').textContent = data[5].title;
    newSix.querySelector('.price').textContent = `$${data[5].price}.00`;
    newSix.querySelector('.newest-slide__product-img').setAttribute("src", data[5].img);
    newSix.querySelector('.newest-slide__product-img').dataset.id  = data[5].id;

    const image = document.getElementsByClassName('newest-slide__product-img')
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
