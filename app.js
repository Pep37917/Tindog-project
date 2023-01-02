import dogs from "./data.js"
import { getUsersArray } from "./utils.js"
import User from "./users.js"

let isWaiting = false

// loading in usernames
let usersArray = []
getUsersArray(dogs, usersArray)

// get next user
function getUser() {
    const nextUser = dogs[usersArray.shift()]
    return nextUser ? new User(nextUser) : renderMessage()
}

// skip users
function skipOption() {
    if (!isWaiting) {
        date.skipUser()
        date.hasBeenSwiped = "true"
        if (date.hasBeenSwiped) {
            isWaiting = true
    
            setTimeout(() => {
                date = getUser()
                render()
                isWaiting = false
            }, 1500)
        }
    } 
    
}

// like users
function likeOption() {
    if (!isWaiting) {
        date.likeUser()
        date.hasBeenLiked = "true"
        if (date.hasBeenLiked) {
            isWaiting = true
    
            setTimeout(() => {
                date = getUser()
                render()
                isWaiting = false
            }, 1500)
        }
    } 
}

// render message
function renderMessage() {
    document.getElementById("user-container").innerHTML = "<h1 class='message'> Out of dogs :p </h1>"
    document.querySelector(".buttons").style.display = "none"
}

// event listeners
document.getElementById("skipBtn").addEventListener("click", skipOption)
document.getElementById("likeBtn").addEventListener("click", likeOption)

// render
function render() {
    document.getElementById("user-container").innerHTML = date.getUserHtml()
}

let date = getUser()
render()


