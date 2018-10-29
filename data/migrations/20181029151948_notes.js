
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function(tbl) {
        tbl.increments(); // unique id
        tbl.string('title', 255).notNullable(); // note title
        tbl.string('content', 255).notNullable(); // note content
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes');
};
