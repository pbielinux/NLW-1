import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';

const routes = express.Router();
const pointsController = new PointsController();

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

routes.post('/points', pointsController.create);

export default routes;
