import React, { useState } from 'react';

function UseStateEx() {
	// Use state return an Array
	const [ counter, setCounter ] = useState(0);	// Return: [ value, function to update state value ]

	function increaseCounter() {
		setCounter(counter + 1);
	}
	function decrementCounter() {
		setCounter(counter - 1);
	}
	function resetCounter() {
		setCounter(0);
	}

	return (
		<div>
			<h1>Counter:	{counter}</h1>
			<button type="button" onClick={decrementCounter}>Decrement</button>
			<button type="button" onClick={resetCounter}>reset</button>
			<button type="button" onClick={increaseCounter}>Increase</button>
		</div>
	);
};

export default UseStateEx;
