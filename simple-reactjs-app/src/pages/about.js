//import weather from './Weather';
import React, { useContext } from 'react';

const About = () => {
	//const bb = useContext(weather)
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>GeeksforGeeks is a Computer Science portal for geeks.
		
	</h1>
	<weather></weather>
	</div>
	
);
};

export default About;
