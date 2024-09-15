import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.render("index.ejs");

})

app.listen(6969, () => {console.log("Run la")});
