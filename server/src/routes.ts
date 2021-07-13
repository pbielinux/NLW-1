import express from 'express';
import knex from './database/connection';

const routes = express.Router();

// Route to list all Items
routes.get('/items', async (request, response) => {
	const items = await knex('items').select('*');	// SELECT * FROM items

	// Transform Items into a more accessible form, easy to use in the front
	const serializedItems = items.map(item => {
		return {
			id: item.id,
			title: item.title,
			image_url: `http://localhost:3333/uploads/${item.image}`,
		};
	});

	return response.json(serializedItems);
});

// Rout to create collect point, so... POST!
routes.post('/points', async (request, response) => {
	// Disruption JS, when you kow the fields, same as:
	// const name = request.body.name;
	// const email = request.body.email; ...
	const {
		name,
		email,
		whatsapp,
		latitude,
		longitude,
		city,
		uf,
		items
	} = request.body;

	// Create knex transaction, if the first query fail the second doesn't execute
	const trx = await knex.transaction();

	const insertedIds = await trx('points').insert({		// The knex insert() method return the IDS of inserted registers
		image: 'image-fake',
		name,	// When the value == variable name can be the short way
		email,
		whatsapp,
		latitude,
		longitude,
		city,
		uf
	});

	const point_id = insertedIds[0];
	const pointItems = items.map((item_id: Number) => {
		return {
			item_id,
			point_id
		}
	});
	// Relationship with Items Tables
	await trx('point_items').insert(pointItems);

	return response.json({ success: true })
});

export default routes;
