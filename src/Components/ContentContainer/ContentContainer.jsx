import { React, useState } from "react";
import { MoneyGenerator } from "../MoneyGenerator/MoneyGenerator";

export function ContentContainer() {
	const [money, setMoney] = useState(0);
	const [generators, setGenerators] = useState([]);

	const handleNewGenerator = () => {
		setGenerators([
			...generators,
			{
				level: 1,
			},
		]);
	};
	const handleMoneyGenerated = (generator) => {};

	const handleLevelUp = (index, newLevel) => {
		const generatorArray = [...generators];
		generatorArray[index].level = newLevel;

		setGenerators([...generatorArray]);
	};

	return (
		<>
			{generators.map((generator, index) => (
				<MoneyGenerator
					key={index + 1}
					id={index}
					level={generator.level}
					handleLevelUp={handleLevelUp}
				/>
			))}
			<button onClick={handleNewGenerator}>Get New Generator</button>
		</>
	);
}
