import { React } from "react";

export function MoneyGenerator(params) {
	const {
		id,
		name,
		level,
		amountGenerated,
		handleLevelUp,
		handleMoneyGenerated,
	} = params;

	return (
		<>
			<p>{name}</p>
			<p>level: {level}</p>
			<button onClick={() => handleLevelUp(id, level + 1)}>
				Upgrade
			</button>
			<button onClick={() => handleMoneyGenerated(amountGenerated)}>
				Generate Money
			</button>
		</>
	);
}
