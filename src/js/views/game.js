import React, { useState } from "react";
import { calculateWinner } from "../component/helpers.jsx";
import Board from "../component/board.jsx";

const styles = {
	width: "200px",
	margin: "20px auto",
};

const Game = ({ iniciaX }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(iniciaX);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "x" : "o";
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	const renderMoves = () => (
		<button
			style={{ color: "black" }}
			onClick={() => setBoard(Array(9).fill(null))}>
			Start of the game
		</button>
	);

	return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div style={styles}>
				<p>
					{winner
						? "winner: " + winner
						: "Tu turno: " + (xIsNext ? "X" : "O")}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};

export default Game;
