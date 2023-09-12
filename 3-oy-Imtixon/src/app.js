const express = require("express");
const fileUpload = require("express-fileupload");

const routes = require("./routes");
const config = require("../config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
app.use("/api",routes);

app.use(express.static(process.cwd() + "/uploads"));
app.listen(config.port,()=>{
    console.log(config.port);
});