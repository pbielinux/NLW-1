import knex from 'knex';
import path from 'path';  // Node library to deal with paths, OS independent

// Does the connection with the database
const connection = knex({
	client: 'sqlite3',   // The SQL client
	connection: {
		filename: path.resolve(__dirname, 'database.sqlite')		// The path of database file
	},
	useNullAsDefault: true
});

export default connection;
