// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  console.log('token', token);
  return getUser();
}

function isValidToken(token) {
  console.log("token of value and type : ", token, typeof token)
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  console.log("parts: ",parts)
  if (parts.length !==3){
    return false
  }
  try{
    const decoded = atob(parts[1])
    console.log("decoded : ", decoded);
    console.log("atob passed")
    return true
  }
  catch (error){
    console.log(error);
    return false
  }
 
}


export function getToken() {
  const token = localStorage.getItem('token');
  if (!token || !isValidToken(token)) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // console.log('token', token);
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);



  // Getting token that was just set from local storage
  const tokenFromLs = localStorage.getItem('token');
  console.log("tokenFromLs : ", tokenFromLs)
  // Checking token validity
  if (!tokenFromLs || !isValidToken(tokenFromLs)){
    console.log("token from ls is invalid, should not happen lol");
    return null;
  } 
  const payload = JSON.parse(atob(tokenFromLs.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  // extract token from user
  if (tokenFromLs==null){
    console.log("token from ls is null, also should not happen")
    return null
  }
  const user = JSON.parse(atob(token.split('.')[1])).user
  console.log("extracted user from tokenFromLs ",user);

  return user;
}
