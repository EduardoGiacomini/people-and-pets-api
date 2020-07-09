const knex = require('../database');

module.exports = {
    async findAll(req, res) {
        const peopleFound = await knex('people');
        return res.json(peopleFound);
    }
};
