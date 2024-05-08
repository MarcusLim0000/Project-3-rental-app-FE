import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3005/api/users'

export function signUp(userInput) {
    return sendRequest(BASE_URL, 'POST', userInput)
}

export function login(userInput) {
    return sendRequest(`${BASE_URL}/sign-in`, 'POST', userInput)
}
const LISTING_URL = 'http://localhost:3005/api/listing'
export function createListing(userInput) {
    return sendRequest(`${LISTING_URL}/create`, 'POST', userInput)
}

export function deleteListing(id) {
    return sendRequest(`${LISTING_URL}/delete/${id}`,'DELETE')
}