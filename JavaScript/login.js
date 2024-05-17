        const usernameInput = document.getElementById("username")
        const passwordInput = document.getElementById("password")
        const form = document.querySelector("form")


        let username, password

        init()

        function init() {
            redirect()

            usernameInput.oninput = function (event) {
                username = event.target.value
            }
            passwordInput.oninput = function (event) {
                password = event.target.value;
            }
            form.onsubmit =async function (event) {
                event.preventDefault()
                console.log(username, password);

                let result= await login() 
                saveToken(result.token)
                redirect()
                
            }
   
        }

        
        async function login() {
            const response =await fetch("https://fakestoreapi.com/auth/login" , {
                    method:'POST',
                    body:JSON.stringify({
                    username,
                    password
                }),
                headers : {
                    'Content-Type': 'application/json'                   
                }
            }) 

            const result =await response.json()
            return  result                           
        }


        function saveToken(token){
                localStorage.setItem("token",token)

        }function redirect(){
            let token = localStorage.getItem("token")
            console.log(token);

            if (token){
                window.location.href ="http://127.0.0.1:5500/index.html"
            }

            
        }

