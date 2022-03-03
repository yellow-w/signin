const crypto = require(`crypto`)
const {createSignature} = require(`../utils/jwt`)

exports.Auth = (req, res, next) => {
    try {
        const cookies = req.headers.cookie.split(`=`)
        const [head, payload, sign] = cookies[1].split(`.`)
        const signature = createSignature(head, payload)
        console.log(`${head}.${payload}.${signature}`)

        if (signature != sign ) throw new Error
            const user = JSON.parse(Buffer.from(payload, `base64`)).toString()
            req.user = {
                ...user
            }
    }catch(err){
        console.log(err)
    }
    next()
}