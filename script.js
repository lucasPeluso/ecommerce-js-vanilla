
// ************** Menu *************

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");
        $btnUser = d.querySelector("#btn-user")
        $menuLogSign = d.querySelector(".menu-log-sign")
        
    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    $btnUser.addEventListener("click", (e) => {
        $menuLogSign.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu__a h3")){
            return false;
        } else {
            $btnMenu.firstElementChild.classList.remove("none");
            $btnMenu.lastElementChild.classList.add("none");
            $menu.classList.remove("is-active");
        }
    })
})(document);

// ***************** Menu Links ***************** //

const sweatersLink = document.getElementById('menu-sweaters')
const shortsLink = document.getElementById('menu-shorts')
const shoesLink = document.getElementById('menu-shoes')
const exploreLink = document.getElementById('menu-explore')
const jewelleryLink = document.getElementById('menu-jewellery')

const getNameCategoryLink = (e) => {
    let nameCategory = e.target.textContent
    setCategory(nameCategory)
    window.location.href="/shop.html"
} 

jewelleryLink.addEventListener('click', (e) => {   
    getNameCategoryLink(e)
})

exploreLink.addEventListener('click', (e) => {   
    getNameCategoryLink(e)
})

sweatersLink.addEventListener('click', (e) => {   
    getNameCategoryLink(e)
})

shortsLink.addEventListener('click', (e) => {   
    getNameCategoryLink(e)
})

shoesLink.addEventListener('click', (e) => {   
    getNameCategoryLink(e)
})

// ***************** Search Product ******************//

const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchInput.addEventListener('keypress', async (e) => {
    if(e.key == 'Enter') {
        const res = await fetch('api.json');
        let data = await res.json();
        let newData = [];
        data.forEach((product) => {
            product.title.toLowerCase().includes(searchInput.value.toLowerCase())
                ? newData.push(product)
                : console.log('0 items')
        })
        localStorage.setItem('search value', JSON.stringify(searchInput.value))
        localStorage.setItem('search product', JSON.stringify(newData))
        window.location.href="/search.html"
    }
})

searchBtn.addEventListener('click', async () => {
    const res = await fetch('api.json');
    let data = await res.json();
    let newData = [];
    data.forEach((product) => {
        product.title.toLowerCase().includes(searchInput.value.toLowerCase())
            ? newData.push(product)
            : console.log('0 items')
    })
    localStorage.setItem('search value', JSON.stringify(searchInput.value))
    localStorage.setItem('search product', JSON.stringify(newData))
    window.location.href="/search.html"
})


// section categories

// elementos sweater, shoes y shorts

const sweatersCategory = document.getElementById('category-sweaters')
const shortsCategory = document.getElementById('category-shorts')
const shoesCategory = document.getElementById('category-shoes')


//  funcion para crear el objeto category
function setCategory(nameCategory) {
    nameCategory = nameCategory
    localStorage.setItem("nameCategory", nameCategory)
}

const getNameCategory = (e) => {
    let nameCategory = e.target.alt
    setCategory(nameCategory)
    window.location.href="/shop.html"
} 

// funcion para obtener el nombre de la categoría y "setearla"


// evento que obtiene la categoría de cada imagén
sweatersCategory.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shortsCategory.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shoesCategory.addEventListener('click', (e) => {   
    getNameCategory(e)
})



// ***************** Validar Email ***************** //


function validateEmail(email) {
    const newsletterRes = document.querySelector('.newsletter-res')
    const newsletterInput = document.querySelector('.newsletter-form__input')
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(email);
    if(isValid) {
        newsletterInput.value = ''
        newsletterRes.classList.remove("none")
        newsletterRes.textContent = '¡Thank you for subscribing! Enjoy your shopping'
    } else {
        newsletterInput.value = ''
        newsletterRes.classList.remove("none")
        newsletterRes.textContent = 'The email is NOT valid'
    }
}


// ***************** testimony slider ******************* //


let counterTestimony = 1;

setInterval(() => {
    document.getElementById('testimony__radio' + counterTestimony).checked = true;
    counterTestimony++;
    if(counterTestimony > 3) {
        counterTestimony = 1;
    }
}, 5000)

// ***************** Category Selector ******************* //

