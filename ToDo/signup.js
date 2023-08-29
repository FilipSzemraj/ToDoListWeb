const form = document.getElementById("formLogin");
const loginButton = document.getElementById("submitLoginButton");

form.onsubmit = (e)=>{
    e.preventDefault();
}

loginButton.onclick = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
            }
        }
    }
    //let formData = new formData(form);
    xhr.send();
}