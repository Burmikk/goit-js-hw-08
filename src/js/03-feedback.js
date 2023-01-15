
import localStorageAPI from "./localStorage"
import throttle from "lodash.throttle"

const formEl = document.querySelector(".feedback-form")
const emailInputEl = document.querySelector("input")
const messageEl = document.querySelector("textarea")
const localData = localStorageAPI.load("feedback-form-state")



onShowLocalData()

function onShowLocalData() {
    if (localData === undefined) {
     return
 }
    emailInputEl.value = localData.email
    messageEl.value = localData.message
}

 
formEl.addEventListener("input", throttle((event) => {
    const objValue = {
        email:emailInputEl.value,
        message:messageEl.value
    }  

    localStorageAPI.save("feedback-form-state", objValue)
}, 500) )



formEl.addEventListener("submit", onRemoveAlldata)

function onRemoveAlldata(event) {
    event.preventDefault()
    if (emailInputEl.value === "" || messageEl.value === "") {
       return alert("Будь ласка, заповніть всі поля!")
        
    } 

    console.log(localStorageAPI.load("feedback-form-state"))
    event.currentTarget.reset();
    localStorage.clear()
    }
    



