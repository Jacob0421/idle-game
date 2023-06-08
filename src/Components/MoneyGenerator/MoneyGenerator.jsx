import { React, useState } from "react";

export function MoneyGenerator(params) {
	const { id, name, level, generator, handleLevelUp } = params;

	return (
		<>
			<p>{name}</p>
			<p>level: {level}</p>
			<button onClick={() => handleLevelUp(id, level + 1)}>
				Upgrade
			</button>
		</>
	);
}
