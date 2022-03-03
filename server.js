const express = require(`express`)
const nunjucks = require(`nunjucks`)
const app = express()
require(`dotenv`).config()
const port = process.env.PORT
const router = require(`./routes`)

app.set(`view engine`,`html`)
nunjucks.configure(`views`,{
    express : app,
    watch: true
})

app.use(express.urlencoded({extended : true}))
app.use(router)


app.listen(port,()=>{
    console.log(`server running on localhost:${port}`)
})