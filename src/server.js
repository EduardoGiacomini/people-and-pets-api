const express = require('express');
const routes = require('./routes');

class Server {
    constructor() {
        this.application = express();
        this.application.use(routes);
    }

    start() {
        this.application.listen(3000, function () {
            console.log('🚀 Server is running...');
        });
    }
}

module.exports = Server;
