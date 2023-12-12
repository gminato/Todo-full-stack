import { Router } from "express";
import { Request,Response } from "express";

class HomeController {
    public path = '/';
    public router = Router();

    constructor() {
        this.initRoutes();
    }


    private initRoutes() {
        this.router.get(this.path, this.index);
    }

    public index(req : Request,res : Response) {
        res.send('Hello World!');
    }

}   

export default HomeController;