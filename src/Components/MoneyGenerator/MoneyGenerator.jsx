import { React, useEffect } from "react";
import "./MoneyGenerator.css";

export function MoneyGenerator(params) {
	const {
		id,
		name,
		level,
		revenue,
		handleLevelUp,
		timeToGenerate,
		handleMoneyChange,
		costToLevel,
	} = params;

	// const timer = setTimeout(
	// 	() => handleMoneyChange(revenue, "add"),
	// 	timeToGenerate
	// );
	useEffect(() => {
		let interval = setInterval(
			() => handleMoneyChange(revenue, "add"),
			timeToGenerate
		);
		return () => clearInterval(interval);
	}, [revenue]);

	return (
		<div className="generator">
			<p>{name}</p>
			<div className="stat-container">
				<p>level: {level}</p>
				<p>cost: {costToLevel} </p>
			</div>
			<div className="button-container">
				<button onClick={() => handleLevelUp(id, level + 1)}>
					Upgrade
				</button>
			</div>
		</div>
	);
}
