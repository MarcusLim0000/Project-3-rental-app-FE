import sendRequest from "./send-request";
import axios from "axios";

const BASE_URL = 'https://project-3-rental-app-be.onrender.com'

export function signUp(userInput) {
    return sendRequest(`${BASE_URL}/api/users`, 'POST', userInput)
}

export function login(userInput) {
    return sendRequest(`${BASE_URL}/api/users/sign-in`, 'POST', userInput)
}

export function createListing(userInput) {
    return sendRequest(`${BASE_URL}/api/listing/create`, 'POST', userInput)
}

export function deleteListing(id) {
    return sendRequest(`${BASE_URL}/api/listing/delete/${id}`,'DELETE')
}

export async function imageUpload(formData){
    const response = await axios.post(
        `${BASE_URL}/api/upload/image`,
        formData
      )
      return response;
}