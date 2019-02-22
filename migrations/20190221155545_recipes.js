
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl.text('recipe-name').notNullable();
      tbl.float('quantity').notNullable();
      tbl.integer('dish_id').unsigned().references('id').inTable('dishes')
      .onDelete('CASCADE').onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
