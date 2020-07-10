module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'people_and_pets_db',
            user: 'your-user',         // usuário do postgres
            password: 'your-password'  // senha do usuário do postgres
        },
        migrations: {
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`
        }
    },
    onUpdateTrigger(table) {
        return `
            CREATE TRIGGER ${table}_updated_at
            BEFORE UPDATE ON ${table}
            FOR EACH ROW
            EXECUTE PROCEDURE on_update_timestamp();
        `
    }
};
