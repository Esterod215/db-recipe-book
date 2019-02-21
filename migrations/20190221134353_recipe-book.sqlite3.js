
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl){
      tbl.increments();
      tbl.text('name').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
  };
