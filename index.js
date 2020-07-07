const Server = require('./src/server');

try {
    const server = new Server();
    server.start();
} catch (error) {
    console.error('Exceção inesperada: ' + error);
}
