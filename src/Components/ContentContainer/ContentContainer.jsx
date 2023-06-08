import { React, useState } from "react";
import { MoneyGenerator } from "../MoneyGenerator/MoneyGenerator";
import { GeneratorData } from "../../Data/GeneratorInitialValues";

import "./ContentContainer.css";

export function ContentContainer() {
	const [money, setMoney] = useState(0);
	const [generators, setGenerators] = useState([
		{
			level: 1,
			baseCost: GeneratorData[0].cost,
			baseTime: GeneratorData[0].time,
			baseRevenue: GeneratorData[0].revenue,
			name: GeneratorData[0].name,
			growthRate: GeneratorData[0].growthRate,
			costToLevel: GeneratorData[0].cost,
			revenue: GeneratorData[0].revenue,
			timeToGenerate: GeneratorData[0].time,
			revenueMultiplier: 1,
		},
	]);

	const handleNewGenerator = () => {
		const newIndex = generators.length;
		const newGeneratorData = GeneratorData[newIndex];

		if (!handleMoneyChange(newGeneratorData.cost, "subtract")) {
			return;
		}

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
	const handleMoneyChange = (changeAmount, operation) => {
		let returnFlag = false;

		switch (operation.toLowerCase()) {
			case "add":
				setMoney((money) => money + changeAmount);
				returnFlag = true;
				break;
			case "subtract":
				if (changeAmount > money) {
					returnFlag = false;
					break;
				}
				setMoney((money) => money - changeAmount);
				returnFlag = true;
				break;
		}

		return returnFlag;
	};

	const handleLevelUp = (index, newLevel) => {
		const generatorArray = [...generators];

		if (!handleMoneyChange(generatorArray[index].costToLevel, "subtract")) {
			return;
		}

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
					handleMoneyChange={handleMoneyChange}
				/>
			))}
			<button onClick={handleNewGenerator}>
				Get New Generator Cost:
				{GeneratorData[generators.length].cost}
			</button>
		</section>
	);
}
