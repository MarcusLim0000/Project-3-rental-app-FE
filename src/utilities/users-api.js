import sendRequest from "./send-request";

//can decide on the url later
const BASE_URL = '/api/users'

function signUp(userInput) {
    //normal route to create a new user in user database
    return sendRequest(BASE_URL, 'POST', userInput)
}

function login(userInput) {
    //search route to access user database (find method)
    return sendRequest(`${BASE_URL}/login`, 'POST', userInput)
}

export default {
    signUp,
    login
}