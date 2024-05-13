

let inputcurriculum = document.getElementById("input1")
let mostrar = document.getElementById("curriculumtext")
let boton =document.getElementById("boton")

boton.addEventListener("click", function () {
    mostrar.innerHTML = inputcurriculum.value
})

let inputreceta = document.getElementById("input2")
let mostrar2 = document.getElementById("curriculumtext1")
let boton2 =document.getElementById("boton2")

boton2.addEventListener("click", function () {
    mostrar2.innerHTML = inputreceta.value
})
