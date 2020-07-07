exports.seed = function (knex) {
    return knex('people').del()
        .then(function () {
            return knex('people').insert([
                {
                    name: 'Carlos Eduardo Dias Giacomini',
                    phone: '99999999999',
                    date_of_birth: '2020-01-01'
                }
            ]);
        });
};
