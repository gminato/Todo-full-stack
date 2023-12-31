import express from 'express';
import { Application } from 'express';
import { pool } from './db/db';

class App {
    public app : Application;
    public port : number;

    constructor(appInit : {port : number; middleWares : any; controllers : any;}) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        // this.initDB();
    }
    

    private initDB() {
        pool.connect((err : any) => {
            if (err) {
              console.error('Unable to connect to the database:', err);
            } else {
              console.log('Connected to the database');
            }
          });
    }

    private middlewares(middleWares : {forEach : (arg0 : (middleWare : any) => void) => void;}) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers : {forEach : (arg0 : (controller : any) => void) => void;}) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

}


export default App;
