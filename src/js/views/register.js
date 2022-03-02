import React from "react";
import "./register.css";

function Register({ iniciarJuego }) {
	return (
		<div>
			<h4>Pick A Weapon</h4>

			<div className="cajaUsuarios">
				<h4>CHOOSE YOUR WEAPON</h4>
				<div>
					<input type="text" placeholder="participante 1" />
					<input type="text" placeholder="participante 2" />
				</div>
				<div className="botones">
					<button onClick={() => iniciarJuego(true)} className="x">
						x
					</button>
					<button onClick={() => iniciarJuego(false)} className="o">
						o
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
