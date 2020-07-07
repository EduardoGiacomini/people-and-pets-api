const express = require('express');

class Server {
    constructor() {
        this.application = express();
    }

    start() {
        this.application.listen(3000, function () {
            console.log('🚀 Server is running...');
        });
    }
}

module.exports = Server;
