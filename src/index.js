import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContentContainer } from "./Components/ContentContainer/ContentContainer";
import { BackgroundAnimation } from "./Components/BackgroundAnimation/BackgroundAnimation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BackgroundAnimation />
		<ContentContainer />
	</React.StrictMode>
);
