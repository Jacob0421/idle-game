import { React } from "react";
import "./MoneyGenerator.css";

export function MoneyGenerator(params) {
	const {
		id,
		name,
		level,
		revenue,
		handleLevelUp,
		handleMoneyGenerated,
		costToLevel,
	} = params;

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
				<button onClick={() => handleMoneyGenerated(revenue)}>
					Generate Money
				</button>
			</div>
		</div>
	);
}
