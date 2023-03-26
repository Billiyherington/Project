const buttonElement = document.querySelector("#btn-js")
const modal = document.querySelector("#modal-js")
const close = modal.querySelector("#close-js")

buttonElement.addEventListener("click", () =>{
    modal.classList.toggle("show")
})
close.addEventListener("click", ()=>{
    modal.classList.remove("show")
})


