
class User {
    constructor(data) {
        Object.assign(this, data)
    }

    skipUser() {
        document.getElementById("user-details").innerHTML += `<img class="badge" src="images/badge-nope.png">`
    }

    likeUser() {
        document.getElementById("user-details").innerHTML += `<img class="badge" src="images/badge-like.png">`
    }
    
    getUserHtml() {
        const {name, avatar, age, bio} = this

        return `<div class="details" id="user-details" style="background: linear-gradient(#00000036, #00000053), url(${avatar}) center/cover no-repeat;">
                    <h2 class="name">${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>`
    }
}

export default User