exports.seed = function (knex) {
    return knex('pets').del()
        .then(function () {
            return knex('pets').insert([
                {
                    name: 'Théo',
                    kind: 'cachorro',
                    person_id: 1
                }
            ]);
        });
};
