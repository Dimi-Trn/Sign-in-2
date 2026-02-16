import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");



//GET REQUESTS
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/home", (req, res) => {
    res.render("home");
});
app.get("/dynamic_post", (req, res) => {
    res.render("dynamic_post", {
        article
    });
});
app.get("/section3", (req, res) => {
    res.render("section3");
});
app.get("/submission", (req, res) => {
    res.render("submission");
});



//POST REQUESTS
app.post("/login", (req, res) => {
    const credentials = {
        username: req.body["inputedUsername"],
        password: req.body["inputedPassword"]
    };
    if (credentials.username === "admin" && credentials.password === "password") {
        res.render("home", {
            credentials
        });
    } else {
        res.render("login", {
            error: "Wrong username or password",
            username: credentials.username
        });
    }
});
app.post("/submission", (req, res) => {
    const article = {
        header: req.body["inputedHeader"],
        text: req.body["inputedText"]
    }
    res.render("dynamic_post.ejs", {
        article
    });
});



//LISTENER
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});