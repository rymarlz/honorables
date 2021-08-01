const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middlewares
        this.middlewares();

        //parseo 

        //rutas app
        this.routes();
    }

    middlewares() {


        //cors
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));


    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo enm puerto', this.port);
        });
    }
}


module.exports = Server;