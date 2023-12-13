import express from 'express';

import App from './app';
import HomeController from './controllers/HomeController';
import AuthController from './controllers/AuthController';

const app = new App({
    port: 3000,
    controllers: [
        new HomeController(),
        new AuthController(),
    ],
    middleWares: [
        express.json(),
        express.urlencoded({extended: true}),
    ]

});

app.listen();   

// this is the entrypoint of our app 