const elvenShieldRecipe = {
	leatherStrips: 2,
	ironIngot: 1,
	refinedMoonstone: 4,
  };

  // ES7 Object spread example
  const elvenGauntletsRecipe = {
	...elvenShieldRecipe,
	leather: 1,
	refinedMoonstone: 1,
  };

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

import { useState } from "react";

const Recipes = () => {
	const [recipe, setRecipe] = useState({});

	return (
		<div>
			<h3>Current Recipes:</h3>
			<button onClick={() => setRecipe(elvenShieldRecipe)}>
				Elven Shiel
			</button>
			<button onClick={() => setRecipe(elvenGauntletsRecipe)}>
				Elven Gauntlets
			</button>

			<ul>
				{Object.keys(recipe).map(material => (
					<li key={material}>
						{material}: {recipe[material]}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Recipes;
