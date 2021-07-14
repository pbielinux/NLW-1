import React from 'react';

// Interface: Define the type of an object
interface HeaderProps {
	title: string;	// Mandatory
	//title?: string;	// Not Mandatory (?)
};

// React.FC (TS Generic Type that can receive Generic(Param >>=> <interface>))
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	);
};

export default Header;
