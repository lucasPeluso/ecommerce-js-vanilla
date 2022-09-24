const btnFav = document.getElementsByClassName('btn-fav')



const deleteToFav = (prodId) => {
    const product = arrFavItems.find(product => (product.id == prodId))
    arrFavItems = arrFavItems.filter((prodId) => prodId !== product);
    localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))
    updateFavItems() 
}

const updateFavItems = () => {
    let arrFavItems = JSON.parse(localStorage.getItem("arrFavItems"))
    const favItems = document.getElementById('fav-items')
    console.log(favItems)
    console.log(arrFavItems)
    favItems.innerHTML = ``
    arrFavItems.forEach((product) => {
        
        const div = document.createElement('div')
        div.className = "fav-item"
        div.innerHTML = `
        <img src="${product.img}" class="fav-item__img" />
        <div class="fav-item__details">
            <h3 class="fav-item__details-title">${product.title}</h3>
            <p class="fav-item__details-price">$${product.price}.00</p>
            <div class="fav-item__details-buttons">
                <button class="fav-item__details-buy">BUY NOW</button>
                <button id="${product.id}" class="fav-item__details-delete">Delete</button>
            </div>
        </div>`

        favItems.appendChild(div)
        
        localStorage.setItem('arrFavItems', JSON.stringify(arrFavItems))

    })

    console.log(arrFavItems)

    let buttonDeleteFav = document.getElementsByClassName('fav-item__details-delete');

    for (var i = 0; i < buttonDeleteFav.length; i++) {
        ((i) => {
            buttonDeleteFav[i].addEventListener('click', () => {
                deleteToFav(buttonDeleteFav[i].id)
            })
        })(i);
    }

    //nro total de productos en el carrito
    //counterCart.innerText = cart.length;

}

document.addEventListener('DOMContentLoaded', () => {
    updateFavItems()
})



