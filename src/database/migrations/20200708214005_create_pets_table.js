exports.up = function(knex) {
    return knex.schema.createTable('pets', function(table) {
        table.increments('id'),
        table.string('name', 255).notNullable(),
        table.string('kind', 100).notNullable(),
        table.integer('person_id')
            .references('people.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('people');
};
