import {Router} from "express";

const routes = new Router;
routes.get("/users", (req, res)=>{
     return res.json({message:"hell"})
})

export default routes;



