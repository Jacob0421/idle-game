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
	const handleMoneyGenerated = (amountGenerated) => {
		setMoney(money + amountGenerated);
	};

	const handleLevelUp = (index, newLevel) => {
		const generatorArray = [...generators];
		generatorArray[index].level = newLevel;

		setGenerators([...generatorArray]);
	};

	return (
		<>
			Money: {money}
			{generators.map((generator, index) => (
				<MoneyGenerator
					key={index + 1}
					id={index}
					level={generator.level}
					amountGenerated={250 + 25 * generator.level + 1000 * index}
					handleLevelUp={handleLevelUp}
					handleMoneyGenerated={handleMoneyGenerated}
				/>
			))}
			<button onClick={handleNewGenerator}>Get New Generator</button>
		</>
	);
}
