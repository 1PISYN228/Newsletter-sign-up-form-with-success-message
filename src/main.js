const formElement = document.querySelector("[data-js-form]")
const messageErrorElement = document.querySelector("[data-js-form-field-error]")
const inputFormElement = document.querySelector("#loginEmail")


const validateEmailSubmit = (event) => {
    event.preventDefault()
    const { target } = event
    const errors = inputFormElement.validity
    const { tooShort, tooLong, valueMissing, patternMismatch } = errors
    if (tooLong || tooShort || valueMissing || patternMismatch) {
    } else {
        const formData = new FormData(formElement)
        console.log(Object.fromEntries(formData))
        formData.forEach((value, name) => {
            localStorage.setItem("email", value)
        })
        if (window.innerWidth >= 640) {
            window.location.assign("./desktop-success.html")
        } else {
            window.location.assign("./mobile-success.html")
        }
    }
    console.log(tooLong, tooShort, valueMissing, patternMismatch)
}


const validateEmailBlur = () => {
    const errors = inputFormElement.validity
    const { tooShort, tooLong, valueMissing, patternMismatch } = errors
    if (tooLong || tooShort || valueMissing || patternMismatch) {
        messageErrorElement.textContent = "Valid email required"
        inputFormElement.classList.add("border-[hsl(4,100%,67%)]", "text-[hsl(4,100%,67%)]", "bg-red-100/100")
        inputFormElement.classList.remove("border-[hsl(0,0%,58%)]", "text-[hsl(0,0%,58%)]", "border-green-300", "text-green-400", "bg-green-50/100")
    } else {
        messageErrorElement.textContent = ""
        inputFormElement.classList.add("border-green-300", "text-green-400", "bg-green-50/100")
        inputFormElement.classList.remove("border-[hsl(4,100%,67%)]", "text-[hsl(4,100%,67%)]", "bg-red-100/100")
    }
}


inputFormElement.addEventListener("focus", () => {
    inputFormElement.classList.remove("border-[hsl(4,100%,67%)]", "text-[hsl(4,100%,67%)]", "bg-red-100/100")
    inputFormElement.classList.add("border-[hsl(0,0%,58%)]", "text-[hsl(0,0%,58%)]")
    messageErrorElement.textContent = ""
})


inputFormElement.addEventListener("blur", validateEmailBlur)
formElement.addEventListener("submit", validateEmailSubmit)



