import sendRequest from "./send-request";

//can decide on the url later
const BASE_URL = 'http://localhost:3005/api/users'

export function signUp(userInput) {
    //normal route to create a new user in user database
    return sendRequest(BASE_URL, 'POST', userInput)
}

export function login(userInput) {
    //search route to access user database (find method)
    return sendRequest(`${BASE_URL}/sign-in`, 'POST', userInput)
}
const LISTING_URL = 'http://localhost:3005/api/listing/create'
export function createListing(userInput) {
    return sendRequest(LISTING_URL, 'POST', userInput)
}