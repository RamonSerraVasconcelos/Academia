const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use("/public", express.static('./public/'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routes)

app.listen(4000, function(erro){
    if(erro){
        console.log("Error")
    }else{
        console.log("Sucess")
    }
})





