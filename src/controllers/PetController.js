const knex = require('../database');

module.exports = {
    async findAll(req, res, next) {
        try {
            const petsFound = await knex('pets');
            return res.json(petsFound);
        } catch (error) {
            next(error);   
        }   
    },

    async findByPersonId(req, res, next) {
        try {
            const { person_id } = req.params;
            
            const petsFound = await knex('pets')
                .where({ person_id })
                .join('people', 'people.id', '=', 'pets.person_id')
                .select(
                    'pets.name as pet_name',
                    'pets.kind as pet_kind',
                    'people.name as person_name',
                    'people.phone as people_phone');

            return res.json(petsFound);
        } catch (error) {
            next(error);   
        }   
    }
};
