import app from "./src/app.js";

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server working ${port}`)
})