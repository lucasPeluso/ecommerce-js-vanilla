import { sortElemPrice, sortElemTitle } from "./sortProducts.js";
import { displayList, setupPagination } from "./setupPagination.js";


const articlesProducts = document.getElementById('articles-products')
const pagination = document.getElementById('pagination')
const select = document.getElementById('select')
const rootCategory = document.getElementById('root-category')

const addProduct = data => {
    // pagina actual
    let currentPage = 1;
    // nro de filas = nro de objetos que se muestran por pagina
    let rows = 8;

    displayList(data, articlesProducts, rows, currentPage)
    setupPagination(data, pagination, rows)
    
    // ordenar por titulo o precio
    select.onchange = sortingValue;

    function sortingValue() {
        if(this.value === 'Default'){
            displayList(data, articlesProducts, rows, currentPage)
        }
        if(this.value === 'AToZ'){
            sortElemTitle(data)
            displayList(data, articlesProducts, rows, currentPage)
        }
        if(this.value === 'LowToHigh') {
            sortElemPrice(data, true)
            displayList(data, articlesProducts, rows, currentPage)

        }
        if(this.value === 'HighToLow') {
            sortElemPrice(data, false)
            displayList(data, articlesProducts, rows, currentPage)
        }
    } 
    
}

// FETCH DATA

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();

        // obteniendo la data correspondiente a la categoria elegida
        let nameCategory = localStorage.getItem("nameCategory")
        if(nameCategory == "category-sweaters" || nameCategory == "menu-sweaters") {
            const dataSweatersOnly = data.filter(({category}) => category === 'Sweaters');
            rootCategory.innerHTML = `SWEATERS`
            // localStorage.removeItem("nameCategory")
            addProduct(dataSweatersOnly)
        } else if(nameCategory == "category-shoes" || nameCategory == "menu-shoes") {
            const dataShoesOnly = data.filter(({category}) => category === 'Shoes');
            rootCategory.innerHTML = `SHOES`
            // localStorage.removeItem("nameCategory")
            addProduct(dataShoesOnly)
        } else if(nameCategory == "category-shorts" || nameCategory == "menu-shorts") {
            const dataShortsOnly = data.filter(({category}) => category === 'Shorts');
            rootCategory.innerHTML = `SHORTS`
            // localStorage.removeItem("nameCategory")
            addProduct(dataShortsOnly)
        } else if(nameCategory == "menu-jewellery") {
            const dataJewelleryOnly = data.filter(({category}) => category === 'Jewellery');
            rootCategory.innerHTML = `JEWELLERY`
            // localStorage.removeItem("nameCategory")
            addProduct(dataJewelleryOnly)
        } else {
            // localStorage.removeItem("nameCategory")
            rootCategory.innerHTML = `EXPLORE ALL`
            addProduct(data)
        }

    } catch (error) {
        console.log(error)
    }
}

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



document.addEventListener('DOMContentLoaded', () => fetchData())


