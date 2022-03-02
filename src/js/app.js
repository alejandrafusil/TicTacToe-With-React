import React, { useState } from "react";
import Register from "./views/register";
import Game from "./views/game";

const App = () => {
	const [clickJugar, setClickJugar] = useState(false);
	const [empiezaX, setEmpiezaX] = useState(true);

	function mostrarJuego(comienzaX) {
		setEmpiezaX(comienzaX);
		setClickJugar(true);
	}

	return (
		<div>
			<h2>Tic Tac Toe in React.js</h2>
			{clickJugar === true ? (
				<Game iniciaX={empiezaX} />
			) : (
				<Register iniciarJuego={mostrarJuego} />
			)}
		</div>
	);
};

export default App;
