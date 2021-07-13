/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Knex } from 'knex';

// CREATE TABLE
export async function up(knex: Knex) {
	return knex.schema.createTable('point_items', table => {
		table.increments('id').primary();

		table.integer('point_id')	// Create a foreign key
			.notNullable()
			.references('id')	// In the id field
			.inTable('points');	// In table points
		table.integer('item_id')
			.notNullable()
			.references('id')
			.inTable('items');
	});
};

// DELETE TABLE
export async function down(knex: Knex) {
	return knex.schema.dropTable('point_items');
};
