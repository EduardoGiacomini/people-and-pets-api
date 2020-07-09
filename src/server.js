const express = require('express');
const routes = require('./routes');

class Server {
    constructor() {
        this.application = express();
        this.application.use(express.json());
        this.application.use(routes);

        this.handleException();
    }

    handleException() {
        this.application.use((error, req, res, next) => {
            console.error(error);
            const statusCode = error.status || 500;
            return res.status(statusCode).json({ error: error.message });
        })
    }

    start() {
        this.application.listen(3000, () => {
            console.log('🚀 Server is running...');
        });
    }
}

module.exports = Server;
