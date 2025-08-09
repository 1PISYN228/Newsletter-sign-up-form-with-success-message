const successEmailElement = document.querySelector("[data-js-desktop-succes-email]")
const buttonReturnElement = document.querySelector("[data-js-button-return]")

buttonReturnElement.addEventListener("click", () => {
    window.location.replace("./index.html")
})

successEmailElement.textContent = localStorage.getItem("email")
