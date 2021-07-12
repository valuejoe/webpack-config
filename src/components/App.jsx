import '../styles/index.scss';
import React from 'react';
import Recipes from './Recipes';

const App = () => {
	return (
		<>
			<session className=""></session>
			<main>
				<session>
					<h1>Hi React</h1>
				</session>
			</main>

			<Recipes />
		</>
	)
};

export default App;
