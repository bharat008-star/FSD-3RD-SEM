import express from "express";
const app = express();

app.get("/home", (req, res) => {
    res.send("chal chal chal!!!!");
});
const PORT = 3000;
app.listen(PORT ,()=>{
    console.log("server is running...");
}
)