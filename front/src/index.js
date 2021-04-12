import React from "react";
import ReactDOM from "react-dom";

import Jobs from "./components/Jobs";
import JobForm from "./components/JobForm";

ReactDOM.render(
	<div>
		<JobForm />
		<Jobs />
	</div>,
	document.getElementById("root")
);
