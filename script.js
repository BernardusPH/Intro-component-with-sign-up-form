let form = document.querySelector(".form");
let textInputs = document.querySelectorAll(".text-input");
let errorOutputs = document.querySelectorAll(".error-message");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
form.addEventListener("submit", function (e) {
    textInputs.forEach((elm, i) => {
        if (elm.value === "") {
            errorHandle(e, i, elm.getAttribute("input-name"), " cannot be empty", elm)
        }
        if (elm.id === "email" && elm.value !== "" && !(emailRegex.test(elm.value))) {
            errorHandle(e, i, elm.getAttribute("input-name"), " is not in correct format", elm)
        }
        if (elm.id === "password" && elm.value !== "" && !(passwordRegex.test(elm.value))) {
            errorHandle(e, i, elm.getAttribute("input-name"), " is not in correct format", elm)
        }
        elm.addEventListener("keypress", function () {
            removeError(i,elm)
        })
        elm.addEventListener("blur", function () {
            removeError(i,elm)
        })

    })

})
function errorHandle(event, index, name, text, element) {
    element.classList.add("input-error")
    element.classList.add("placeholder-remover")
    event.preventDefault()
    errorOutputs[index].classList.remove("hide")
    errorOutputs[index].textContent = name + text;
}
function removeError(index,element) {
    errorOutputs[index].classList.add("hide")
    element.classList.remove("input-error")
    element.classList.remove("placeholder-remover")
}