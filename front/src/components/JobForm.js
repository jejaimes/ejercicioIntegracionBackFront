import useJobForm from "./customHooks";

export default function JobForm() {
	const { handleSubmit, handleInputChange } = useJobForm();
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" onChange={handleInputChange} />
				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					name="company"
					onChange={handleInputChange}
				/>
				<label htmlFor="salary">Salary</label>
				<input
					type="text"
					id="salary"
					name="salary"
					onChange={handleInputChange}
				/>
				<label htmlFor="city">City</label>
				<input type="text" id="city" name="city" onChange={handleInputChange} />
				<button type="submit">Register offer</button>
			</form>
		</div>
	);
}
