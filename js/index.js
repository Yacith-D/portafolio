const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const cerrar = document.querySelector('#close')

cerrar.addEventListener('click', ()=>{
    alert('BYE')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})

let inputSobremi = document.getElementById("input1")
let sobremiInfo = document.getElementById("texto")
let btn1 = document.getElementById("enviar")


btn1.addEventListener("click", function () {
    sobremiInfo.innerHTML= inputSobremi.value
})


                                                    


