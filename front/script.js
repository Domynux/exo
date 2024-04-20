const formulaire =  document.getElementById
('formulaire');

formulaire.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const email = document.getElementById('eamil').value;
    const password = document.getElementById("password").value;

    const response =await fetch("http://localhost/3000/login")

})