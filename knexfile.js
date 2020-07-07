module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'sports',
            user: 'your-user',         // usuário do postgres
            password: 'your-password'  // senha do usuário do postgres
        },
        migrations: {
            directory: `${__dirname}/src/database/migrations`
        }
    }
};
