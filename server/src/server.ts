import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static())

app.listen(3333);
