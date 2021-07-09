import express from 'express';

const app = express();

app.use(express.json());		// Like add a plugin, to tell express to understand JSON

const users = [
		'Diego',		//0
		'Cleiton',	//1
		'Robson',		//2
		'Airto'			//3
];

// Request the users list
app.get('/users', (request, response) => {
	const search = String(request.query.search); // Force to be string, not an array if multiple params

	const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

	// REST follows a pattern, return JSON
	return response.json(filteredUsers);
});

// Request user list with parameters (:id indicates the parameter)
app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id); // Use Number() becouse returns 'n';

	const user = users[id];

	return response.json(user);
});

// POST a new user
app.post('/users', (request, response) => {
	const data = request.body;

	const user = {
		name: data.name,
		email: data.email
	};


	return response.json(user);    // Use the reponse with return to force the code stop
});

app.listen(3333);
