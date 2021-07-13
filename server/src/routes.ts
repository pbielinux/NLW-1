import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// ITEMS
// Route to list all Items
routes.get('/items', itemsController.index);

// POINTS
// Route to create a Point
routes.post('/points', pointsController.create);

// Route to list Points
//routes.get('/points/:id', pointsController.show);


export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)
