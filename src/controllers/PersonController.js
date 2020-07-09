const knex = require('../database');

module.exports = {
    async findAll(req, res) {
        try {
            const peopleFound = await knex('people');
            return res.json(peopleFound);
        } catch (error) {
            next(error);   
        }   
    },

    async create(req, res, next) {
        try {
            const { name, phone, dateOfBirth } = req.body;

            await knex('people')
                .insert({ name, phone, date_of_birth: dateOfBirth });

            return res.status(201).json({ name, phone, dateOfBirth });
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, phone, dateOfBirth } = req.body;

            await knex('people')
                .update({ name, phone, date_of_birth: dateOfBirth })
                .where({ id });

            return res.json({ name, phone, dateOfBirth });
        } catch (error) {
            next(error);
        }
    },
    
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            
            await knex('people')
                .delete()
                .where({ id });

            return res.send();
        } catch (error) {
            next(error);
        }
    }
};
