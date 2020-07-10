const knex = require('../database');

module.exports = {
    async findAll(req, res, next) {
        try {
            const { page = 1, limit = 5 } = req.query;

            const fromIndex = ((page - 1) * limit);
            const petsFound = await knex('pets').limit(limit).offset(fromIndex);

            return res.json(petsFound);
        } catch (error) {
            next(error);   
        }   
    },

    async findByPersonId(req, res, next) {
        try {
            const { person_id } = req.params;
            const { page = 1, limit = 5 } = req.query;
            
            const fromIndex = ((page - 1) * limit);
            const petsFound = await knex('pets')
                .where({ person_id })
                .join('people', 'people.id', '=', 'pets.person_id')
                .select(
                    'pets.name as pet_name',
                    'pets.kind as pet_kind',
                    'people.name as person_name',
                    'people.phone as people_phone')
                .limit(limit)
                .offset(fromIndex);

            return res.json(petsFound);
        } catch (error) {
            next(error);   
        }   
    },

    async create(req, res, next) {
        try {
            const { name, kind, personId } = req.body;

            await knex('pets')
                .insert({ name, kind, person_id: personId });

            return res.status(201).json({ name, kind, personId });
        } catch (error) {
            next(error)
        }
    }
};
