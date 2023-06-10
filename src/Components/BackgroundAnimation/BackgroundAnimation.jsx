import React from "react";
import "./BackgroundAnimation.css";

export function BackgroundAnimation() {
	return (
		<>
			<div className="pacman-animation">
				<div className="pacman">
					<div className="pacman-eye"></div>
				</div>
				<div className="ghost blinky">
					<div className="ghost-eyes">
						<div className="left-eye">
							<div className="left-pupil"></div>
						</div>
						<div className="right-eye">
							<div className="right-pupil"></div>
						</div>
					</div>
					<div className="tail"></div>
				</div>
				<div className="ghost clyde">
					<div className="ghost-eyes">
						<div className="left-eye">
							<div className="left-pupil"></div>
						</div>
						<div className="right-eye">
							<div className="right-pupil"></div>
						</div>
					</div>
					<div className="tail"></div>
				</div>
				<div className="ghost inky">
					<div className="ghost-eyes">
						<div className="left-eye">
							<div className="left-pupil"></div>
						</div>
						<div className="right-eye">
							<div className="right-pupil"></div>
						</div>
					</div>
					<div className="tail"></div>
				</div>
				<div className="ghost pinky">
					<div className="ghost-eyes">
						<div className="left-eye">
							<div className="left-pupil"></div>
						</div>
						<div className="right-eye">
							<div className="right-pupil"></div>
						</div>
					</div>
					<div className="tail"></div>
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
		</>
	);
}
