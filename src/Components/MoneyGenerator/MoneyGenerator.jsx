import { React, useEffect, useState } from "react";
import "./MoneyGenerator.css";

export function MoneyGenerator(params) {
	const [isClicked, setIsClicked] = useState(false);

	const {
		id,
		name,
		level,
		revenue,
		handleLevelUp,
		timeToGenerate,
		handleMoneyChange,
		costToLevel,
		image,
	} = params;

	useEffect(() => {
		let interval = setInterval(
			() => handleMoneyChange(revenue, "add"),
			timeToGenerate
		);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [revenue]);

	return (
		<div className="generator">
			<img
				src={process.env.PUBLIC_URL + image}
				alt={image}
				className={`generator-icon ${
					isClicked ? "click-animation" : ""
				}`}
				onClick={() => {
					setIsClicked(true);
					handleLevelUp(id, level + 1);
				}}
				onAnimationEnd={() => setIsClicked(false)}
			/>

			<div>
				<p>{name}</p>
				<div className="stat-container">
					<p>Level: {level}</p>
					<p>Revenue: {revenue}</p>
				</div>
				<button onClick={() => handleLevelUp(id, level + 1)}>
					Buy Upgrade: ${costToLevel}
				</button>
			</div>
		</div>
	);
}
