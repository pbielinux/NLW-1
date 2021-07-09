import express from 'express';

const app = express();
app.use(express.json());


app.get('/', (request, response) => {
	return response.json({ message: 'Welcome!' });
});

app.listen(3333);
