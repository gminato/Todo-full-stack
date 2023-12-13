import { Router } from "express";
import {Request,Response} from 'express';
import CognitoSerice from "../service/cognito.service";

class AuthController {

    public path = '/auth';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.authSuccess);
        this.router.post(`${this.path}/login`, this.login);
        this.router.post(`${this.path}/signup`, this.signup);
        this.router.post(`${this.path}/verify`,this.verify);
    }

    authSuccess = (request:Request, response:Response) => {
        response.send('auth success');
    }

    loginBodyCheck = (request:Request) => {
        const {username,email, password} = request.body;
        
        if (username && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password && password.length >= 8 ) {
           return true;
        } 
        return false;
    }

    login = async (request: Request, response: Response) => {
        console.log(request.body)
        // if(!this.loginBodyCheck(request)) {
        //     response.status(400).send('Invalid login body');
        //     return;
        // }
        const cognito = new CognitoSerice();
        const loginStatus = await cognito.login(request.body.username, request.body.password);
        if (!loginStatus) {
            response.status(400).send('Invalid login body');
            return;
        }
        response.send('Login success ${loginStatus}');
    }

    signup = async (request: Request, response: Response) => {
        const { username, email, password } = request.body;
        if(!this.loginBodyCheck(request)) {
            response.status(400).send('Invalid signUp body');
            return;
        }

        const cognito = new CognitoSerice();
        const success = await cognito.signUp(username, password, [{Name: 'email', Value: email}]);
        if (!success) {
            response.status(400).send('Invalid signup body');
            return;
        }
        response.send(`signup success ${success.data}`);
    }

    verify = async (request: Request, response: Response) => {
        if(!request.body.username && request.body.code) {
            response.status(400).send('Invalid verify body');
            return;
        }

        const cognito = new CognitoSerice();
        const success = await cognito.confirmSignUp(request.body.username, request.body.code);
        if (!success) {
            response.status(400).send('Invalid verify body');
            return;
        }
        response.send(`verify success}`);
    }
}

export default AuthController;  