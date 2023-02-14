import app from "./src/app.js";
import  cors from "cors";

let port = process.env.PORT || 3000;

app.use(cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  }));

app.listen(port, () => {
    console.log(`server working ${port}`)
})