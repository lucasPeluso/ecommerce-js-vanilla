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
        if(!e.target.matches(".menu a"))
        return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
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

// ***************** Fetch Data ******************* //

document.addEventListener('DOMContentLoaded', () => fetchData())

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        addProduct(data)
    } catch (error) {
        console.log(error)
    }
}

// ***************** Template Content ******************* //

const articleProduct = document.getElementById('article-product').content;
const articlesProducts = document.getElementById('articles-products')
const fragment = document.createDocumentFragment();


const addProduct = data => {
    data.forEach(product => {
        articleProduct.querySelector('h5').textContent = product.title;
        articleProduct.querySelector('p').textContent = `$${product.price}.00`;
        articleProduct.querySelector('img').setAttribute("src", product.img);
        articleProduct.querySelector('a').dataset.id  = product.id;
        

        const clone = articleProduct.cloneNode(true);
        fragment.appendChild(clone)
    });
    articlesProducts.appendChild(fragment)
}