async function sendRequest(url, method='GET', payload) {

    const options = {method}
    if(payload) { 
        //i have no idea what the header is for, can only test when server is ready
        options.headers = { 'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    // didnt code the get token yet since focusing on user log in/sign up first
    const res = await fetch(url, options)
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}

export default sendRequest