


console.log("hello each product");
let eachProduct = document.querySelector(".eachProduct")
console.log(eachProduct);


init()

    async function init(){

        const productId = idGetter()
        const product = await fetchProducts(productId)
        // console.log(product);
        renderProduct(product)       
    }

    function idGetter(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get("id");
        return id
    }

    async function fetchProducts(id) {
        showSpinner();

        try {
            let response =await fetch(`https://fakestoreapi.com/products/${id}`)
            let result = await response.json()
            console.log(result);
            return result
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
        eachProduct.prepend(div);
    
    }
      
    function hideSpinner() {
        const spinner = document.querySelector(".spinner");
        spinner.remove();
    }

    function renderProduct(product) {
        const div = document.createElement("div")

        
        let eachProduct = document.querySelector(".eachProduct")
        let eachInfo = document.querySelector(".eachInfo")
        let ratingDiv = document.createElement("div")
        ratingDiv.classList.add("ratingDiv")


        
        let img= document.createElement("img")
        img.classList.add("img")
        img.src = product.image
        eachProduct.prepend(img)
        

        let title = document.createElement("h4")
        title.textContent = product.title
        eachInfo.append(title)


        let rate= document.createElement("p")
        rate.textContent = "⭐️".repeat(Math.round(product.rating.rate));
        ratingDiv.append(rate)
        eachInfo.append(ratingDiv)


        let count= document.createElement("h6")
        count.textContent = `(${product.rating.count} Reviews)`
        ratingDiv.append(count)
        eachInfo.append(ratingDiv)

        let price= document.createElement("h2")
        price.textContent = ` $ ${product.price}`
        eachInfo.append(price)
        

        let description = document.createElement("h5")
        description.textContent = product.description
        eachInfo.append(description)



        document.body.append(div)
    }


    let minus = document.getElementById("minimiser")
    let plus = document.getElementById("increaser")
    let amount = document.getElementById("amount")
    console.log(minus,plus,amount);

    function adder(){
        
        let a = 0
        minus.onclick = function () {
            console.log("minimised");
            a--
            amount.textContent = a     
        }
        plus.onclick = function () {
            console.log("increased"); 
            a++
            amount.textContent = a
           
               
        }
    }
    adder()
