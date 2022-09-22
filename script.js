// ************** Menu *************

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
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


// section categories

// elementos sweater, shoes y shorts

const sweatersCategory = document.getElementById('category-sweaters')
const shortsCategory = document.getElementById('category-shorts')
const shoesCategory = document.getElementById('category-shoes')


//  funcion para crear el objeto category
function setCategory(nameCategory) {
    let category = {
        nameCategory: undefined
    }

    localStorage.setItem("nameCategory", nameCategory)
}


// funcion para obtener el nombre de la categoría y "setearla"
const getNameCategory = (e) => {
    let nameCategory = e.target.id
    setCategory(nameCategory)
    console.log(nameCategory)

    window.location.href="/shop.html"

} 

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


// ***************** Menu Links ***************** //

const sweatersLink = document.getElementById('menu-sweaters')
const shortsLink = document.getElementById('menu-shorts')
const shoesLink = document.getElementById('menu-shoes')
const exploreLink = document.getElementById('menu-explore')
const jewelleryLink = document.getElementById('menu-jewellery')

jewelleryLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

exploreLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

sweatersLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shortsLink.addEventListener('click', (e) => {   
    getNameCategory(e)
})

shoesLink.addEventListener('click', (e) => {   
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
