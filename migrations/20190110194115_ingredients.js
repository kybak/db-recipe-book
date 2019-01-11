exports.up = function(knex, Promise) {
    knex.schema.createTable('ingredients', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.float('qty');
        table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('ingredients');
};