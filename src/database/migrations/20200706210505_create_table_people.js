const { onUpdateTrigger } = require("../../../knexfile");

exports.up = async function(knex) {
    return knex.schema.createTable('people', function(table) {
        table.increments('id'),
        table.string('name', 255).notNullable(),
        table.string('phone', 11).unique().notNullable(),
        table.date('date_of_birth').notNullable(),

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
        .then(function() {
            return knex.raw(onUpdateTrigger('people'));
        });
};

exports.down = async function(knex) {
    return knex.schema.dropTable('people');
};
