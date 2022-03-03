const crypto = require(`crypto`)
require(`dotenv`).config()
const salt = `web7722`

function createToken(status){
    const header = {
        typ : "JWT",
        alg : "HS256"
    }

    const payload = {
        ...status
    }

    const encodingHeader = encoding(header)
    const encodingPayload = encoding(payload)
    const signature = createSignature(encodingHeader,encodingPayload)

    const jwt = `${encodingHeader}.${encodingPayload}.${signature}`
    return jwt;
}


function encoding(v){
    return Buffer.from(JSON.stringify(v)).toString(`base64`).replace(/[=]/g,'');
}

function createSignature(header,payload){
    encodedData = `${header}.${payload}`
    const signature = crypto.createHmac(`sha256`,salt)
                            .update(encodedData)
                            .digest(`base64`)
                            .replace(/[=]/g,'')                   
    return signature;
}

module.exports = {
    createToken,createSignature
}