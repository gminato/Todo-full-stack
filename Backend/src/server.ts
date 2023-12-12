import express from 'express';

import App from './app';
import HomeController from './controllers/HomeController';

const app = new App({
    port: 3000,
    controllers: [
        new HomeController(),
    ],
    middleWares: []
});

app.listen();   
