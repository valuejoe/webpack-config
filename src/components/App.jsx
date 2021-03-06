import '../styles/index.scss';
import React from 'react';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from "../images/sword.svg";

const App = () => {
	return (
		<>
			<section className="hero"></section>
			<main>
				<session>
					<h1>Hi React</h1>
				</session>
				<img src={sword} alt="sword" width="250" />
				<img src={swordSvg} alt="sword" width="250" />

				<Recipes />
			</main>
		</>
	)
};

export default App;
