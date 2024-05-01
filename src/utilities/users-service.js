import * as usersAPI from './users-api'

export async function signUp(userData) {
    // const userData = 'lol@hotmail.com'
    const token = await usersAPI.signUp(userData); //userData undefined. not sure how to define userData
    localStorage.setItem('token', token);
    return getUser();
}


export async function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now()/1000) {
        localStorage.removeItem('token');
        return null
    }
    return token;
}

//submit formData to App.js to circumvent token?
export function getUser() {
    const token = getToken();
    return token ?
    JSON.parse(atob(token.split('.')[1])).userInput
    :
    null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}