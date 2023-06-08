import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContentContainer } from "./Components/ContentContainer/ContentContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ContentContainer />
	</React.StrictMode>
);
