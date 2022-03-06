const { pool } = require(`../../db`)
const { SQL } = require(`../../queries`)
const { createToken } = require(`../../utils/jwt`)

exports.singUp = (req,res) => {
    res.render(`user/signup`)
}

exports.idCheck = (req,res) => {
    console.log(req.body)
    const response = JSON.stringify({
        result : 1
    })
    res.send(response)
}


exports.signIn = (req, res) => {
    res.render(`user/signin`)
}


exports.signInPost = (req, res) => {
    const {userid, userpw} = req.body
    const param = [ userid, userpw ]
    try {
        pool.getConnection((err, conn) => {
            conn.query(SQL.signInPost, param, (error, result) => {
                if(result[0]!= undefined){
                    delete result[0].pw
                    const item = result[0]
                    const token = createToken(item)
                    res.setHeader(`Set-Cookie`,`AccessToken=${token}; httpOnly; secure; path=/;`)
                    res.send(`signedIn`)
                } else {
                    res.send(`notsignedIn`)
                }    
                conn.release()
            })
        })
    } catch (err) {
        console.log(err)
    }
}