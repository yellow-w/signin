const { pool } = require(`../../db`)
const { SQL } = require(`../../queries`)
const { createToken } = require(`../../utils/jwt`)
// const {alertmove} = require(`../../utils/alertmove`)


exports.login = (req, res) => {
    res.render(`login`)
}

// exports.login2 = (req,res) => {
//     console.log(req.body)
//     res.send('보임?')
// }

exports.loginPost = (req, res) => {
    const {userid, userpw} = req.body
    const param = [ userid, userpw ]
    try {
        pool.getConnection((err, conn) => {
            conn.query(SQL.loginPost, param, (error, result) => {
                if(result[0]!= undefined){
                    delete result[0].pw
                    const item = result[0]
                    const token = createToken(item)
                    res.setHeader(`Set-Cookie`,`AccessToken=${token}; httpOnly; secure; path=/;`)
                    res.render(`index`)
                } else {
                    res.send(`로그인 정보를 확인해주세요`)
                }    
                conn.release()
            })
        })
    } catch (err) {
        console.log(err)
    }
}