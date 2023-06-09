import React from "react";
import "./BackgroundAnimation.css";

export function BackgroundAnimation() {
	return (
		<div className="pacman-animation">
			<div className="pacman">
				<div className="eyes"></div>
			</div>
			<div className="pellet-container">
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="power-cookie"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
				<div className="snack-pellet"></div>
			</div>
		</div>
	);
}
