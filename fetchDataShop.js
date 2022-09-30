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
        if(nameCategory == "Sweaters") {
            const dataSweatersOnly = data.filter(({category}) => category === 'Sweaters');
            rootCategory.innerHTML = `SWEATERS`
            addProduct(dataSweatersOnly)
        } else if(nameCategory == "Shoes") {
            const dataShoesOnly = data.filter(({category}) => category === 'Shoes');
            rootCategory.innerHTML = `SHOES`
            addProduct(dataShoesOnly)
        } else if(nameCategory == "Shorts") {
            const dataShortsOnly = data.filter(({category}) => category === 'Shorts');
            rootCategory.innerHTML = `SHORTS`
            addProduct(dataShortsOnly)
        } else if(nameCategory == "Jewellery") {
            const dataJewelleryOnly = data.filter(({category}) => category === 'Jewellery');
            rootCategory.innerHTML = `JEWELLERY`
            addProduct(dataJewelleryOnly)
        } else {
            rootCategory.innerHTML = `EXPLORE ALL`
            addProduct(data)
        }

    } catch (error) {
        console.log(error)
    }
}


document.addEventListener('DOMContentLoaded', () => fetchData())


