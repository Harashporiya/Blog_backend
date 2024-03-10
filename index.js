const express = require("express");
const path = require("path")
const mongoose = require("mongoose")
const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")
const cookieParse = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");


const app = express();
const PORT = 4001;

mongoose.connect("mongodb://127.0.0.1:27017/blogify")
.then(()=>console.log("MongoDB Connected"))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: true}))
app.use(cookieParse());
app.use(checkForAuthenticationCookie("token"));

app.get("/", (req, res)=>{
      res.render("home", {
        user: req.user,
    });
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`))
