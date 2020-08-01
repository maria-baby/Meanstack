const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
//const Productdata=require("./src/model/prodschema")

const app=express();

const crudrouter=require("./src/routes/crudroutes");
app.use(cors());//cross origin resource sharing can  be used to share resources between servers
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false})) 
app.use(express.urlencoded({extended:true}))
app.use("/products",crudrouter)

app.listen(3000,()=>{
    console.log("connected")
})