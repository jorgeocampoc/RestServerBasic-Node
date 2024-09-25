const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
            this.app = express();
            this.port = process.env.PORT || 3000;
            this.usersRoutePath = '/api/users'

            //midlewares
            this.middlewares();

            this.routes();
    }

    middlewares(){


        //cors
        this.app.use(cors());

        //parse json
        this.app.use(express.json())

        //directorio public
        this.app.use( express.static('public') )
    }

    routes(){
       this.app.use(this.usersRoutePath,require('../routes/user'))
        
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor en el pueto' + this.port);
        })
        
        
    }
}

module.exports = Server;    