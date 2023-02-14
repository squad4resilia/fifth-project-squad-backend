import express from "express";
import cors from "cors";
import db from "./db-config/connection.js";
import routes from "./routes/main.js"

db.on("open", ()=>{
    console.log("db working")
})

db.on("error", (err)=>{
    console.log("db isnt working", err)
})

const app = express();
app.use(cors())
app.use(express.json());
routes(app);

export default app;