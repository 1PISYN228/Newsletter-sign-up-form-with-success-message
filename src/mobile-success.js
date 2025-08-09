const successEmailElement = document.querySelector("[data-js-mobile-success-email]")
const buttonReturnElement = document.querySelector("[data-js-button-return]")

buttonReturnElement.addEventListener("click", () => {
    window.location.replace("./index.html")
})
console.log(successEmailElement)

successEmailElement.textContent = localStorage.getItem("email")