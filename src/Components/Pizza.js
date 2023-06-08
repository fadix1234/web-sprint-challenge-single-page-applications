import axios from "axios";
import * as yup from "yup";
import React, { useState, useEffect } from "react";

const schema = yup.object().shape({
	name: yup.string().required().min(2, "name must be at least 2 characters"),
});

export default function Pizza() {
	const [form, setForm] = useState({
		name: "",
		size: "",
		topping1: false,
		topping2: false,
		topping3: false,
		topping4: false,
		special: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		size: "",
		topping1: "",
		topping2: "",
		topping3: "",
		topping4: "",
		special: "",
	});
	const [disabled, setDisabled] = useState(true);

	const setFormErrors = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => setErrors({ ...errors, [name]: "" }))
			.catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
	};

  console.log(errors);

	const change = (event) => {
		const { checked, value, name, type } = event.target;
		let valueToUse;
    if (type === 'checkbox') {
      valueToUse = !form[name];
    } else {
      valueToUse = value;
    }
    if (name === 'name') {
      setFormErrors(name, valueToUse);
    }
		setForm({ ...form, [name]: valueToUse });
	};

	useEffect(() => {
		schema.isValid(form).then((valid) => setDisabled(!valid));
	}, [form]);

	const submit = (event) => {
		debugger;
		event.preventDefault();
		const newUser = {
			name: form.name,
			size: form.size,
			topping1: form.topping1,
			topping2: form.topping2,
			topping3: form.topping3,
			topping4: form.topping4,
			special: form.special,
		};
		axios
			.post("https://reqres.in/api/orders", newUser)
			.then((res) => {
				setForm({
					name: "",
					size: "",
					topping1: "",
					topping2: "",
					topping3: "",
					topping4: "",
					special: "",
				});
			})
			.catch((err) => {});
	};

	return (
		<div>
			<div>{errors.name}</div>
			<h1>order-pizza</h1>

			<form id="pizza-form" onSubmit={submit}>
				<label>
					name
					<input
            name="name"
						value={form.name}
						onChange={change}
						id="name-input"
						type="text"
					/>
				</label>

				<label>
					size
					<select name="size" value={form.size} onChange={change} id="size-dropdown">
						<option value="sm">14 inches</option>
						<option value="lg">16 inches</option>
					</select>
				</label>

				<label>
					{" "}
					topping1
					<input name="topping1" checked={form.topping1} onChange={change} type="checkbox" />
				</label>
				<label>
					{" "}
					topping2
					<input name="topping2" checked={form.topping2} onChange={change} type="checkbox" />
				</label>
				<label>
					{" "}
					topping3
					<input name="topping3" checked={form.topping3} onChange={change} type="checkbox" />
				</label>
				<label>
					{" "}
					topping4
					<input name="topping4" checked={form.topping4} onChange={change} type="checkbox" />
				</label>

				<label>
					special
					<input
            name="special"
						value={form.special}
						onChange={change}
						id="special-text"
						type="text"
					/>
				</label>

				<button id="order-button">submit</button>
			</form>
		</div>
	);
}