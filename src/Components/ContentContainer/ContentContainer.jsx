import { React, useState } from "react";
import { MoneyGenerator } from "../MoneyGenerator/MoneyGenerator";
import { GeneratorData } from "../../Data/GeneratorInitialValues";

import "./ContentContainer.css";

export function ContentContainer() {
	const [money, setMoney] = useState(0);
	const [generators, setGenerators] = useState([]);

	const handleNewGenerator = () => {
		const newIndex = generators.length;
		const newGeneratorData = GeneratorData[newIndex];

		setGenerators([
			...generators,
			{
				level: 1,
				baseCost: newGeneratorData.cost,
				baseTime: newGeneratorData.time,
				baseRevenue: newGeneratorData.revenue,
				name: newGeneratorData.name,
				growthRate: newGeneratorData.growthRate,
				costToLevel: newGeneratorData.cost,
				revenue: newGeneratorData.revenue,
				timeToGenerate: newGeneratorData.time,
				revenueMultiplier: 1,
			},
		]);
	};
	const handleMoneyGenerated = (amountGenerated) => {
		setMoney(money + amountGenerated);
	};

	const handleLevelUp = (index, newLevel) => {
		const generatorArray = [...generators];
		generatorArray[index].level = newLevel;
		const growthRate = generatorArray[index].growthRate;

		//Change Revenue
		const baseRevenue = generatorArray[index].baseRevenue;
		const revenueMultiplier = generatorArray[index].revenueMultiplier;

		generatorArray[index].revenue =
			Math.floor(baseRevenue + newLevel * growthRate) * revenueMultiplier;

		//ChangeCost
		const baseCost = generatorArray[index].baseCost;

		generatorArray[index].costToLevel = Math.floor(
			baseCost * Math.pow(growthRate, newLevel)
		);
		
		//Set the Generators array back
		setGenerators([...generatorArray]);
	};

	return (
		<section className="content-container">
			<h1>Money: {money}</h1>
			{generators.map((generator, index) => (
				<MoneyGenerator
					key={index + 1}
					id={index}
					name={generator.name}
					level={generator.level}
					revenue={generator.revenue}
					costToLevel={generator.costToLevel}
					timeToGenerate={generator.timeToGenerate}
					handleLevelUp={handleLevelUp}
					handleMoneyGenerated={handleMoneyGenerated}
				/>
			))}
			<button onClick={handleNewGenerator}>Get New Generator</button>
		</section>
	);
}
