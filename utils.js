// get users array

function getUsersArray(data, array) {
    for (const user in data) {
        array.push(user)
    }
}

export {getUsersArray}