import express from "express";
import event from "./event-routes.js"

const routes = (app) => {
    app.route("/").get((req, res) =>{
        res.status(200).send({title: "working"});
    })

    app.use(express.json(), event)
}

export default routes;