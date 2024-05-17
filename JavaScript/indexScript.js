
let cards = document.querySelector(".cards")
let login = document.createElement("a")
let signIn = document.getElementById("signIn")



async function fetchProducts(){
    showSpinner();

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return products;
  } catch (error) {
    console.error(error);
  } finally {
    hideSpinner();
    console.log("still working");
  }
}

function showSpinner() {
    const div = document.createElement("div");
    div.className = "spinner";
    cards.prepend(div);

}
  
function hideSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.remove();
}



async function init(){
    const products = await fetchProducts()
    render(products)
}


function render(products){

    products.forEach(function(product) {   
        let card = document.createElement("div")
        card.classList.add("card")
        cards.append(card)

        let a = document.createElement("a")
        a.href = `http://127.0.0.1:5500/eachProduct.html?id=${product.id}`
        console.log(a);


        
        let img= document.createElement("img")
        img.classList.add("img")
        img.src = product.image
        a.append(img)
        card.prepend(a)
        console.log(card);

        

        let title = document.createElement("h4")
        title.textContent = product.title
        card.append(title)

        let price= document.createElement("h2")
        price.textContent = ` $ ${product.price}`
        card.append(price)

        let rate= document.createElement("p")
        rate.textContent = "⭐️".repeat(Math.round(product.rating.rate));
        card.append(rate)

        let count= document.createElement("h5")
        count.textContent = `(${product.rating.count})`
        card.append(count)

        // let button = document.createElement("button")
        // button.textContent = "Add to card"
        // card.append(button)
    });


}

signIn.onclick = function(){
    window.location.href ="http://127.0.0.1:5500/login.html"      
}


init()
