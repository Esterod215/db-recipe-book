
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
      tbl.increments();
      tbl.text('ingredient-name').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };
