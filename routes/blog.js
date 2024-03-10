const {Router} = require("express")

const router = Router();

router.get("/add-new", (req, res)=>{
    return res.render("addblog", {
        user: req.user,
    })
})


router.post("/add-new", (req, res)=>{
    console.log(req.body);
    return res.redirect("/")
})

module.exports = router;