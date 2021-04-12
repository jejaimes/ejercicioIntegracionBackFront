import { useState } from "react";

const useJobForm = (schema) => {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("/offers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputs),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleInputChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	return { handleSubmit, handleInputChange };
};

export default useJobForm;
