const form = document.getElementById("formLogin");
const loginButton = document.getElementById("submitLoginButton");

form.onsubmit = (e)=>{
    e.preventDefault();
}

loginButton.onclick = () =>{
    console.log("esa");
}