import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import './NewMadlibFormikForm.css';

const validationSchema = yup.object({
	noun: yup
		.string('Enter a noun')
		.min(2, 'Noun should be of minimum 2 characters length')
		.required('Noun is required'),
	secondNoun: yup
		.string('Enter a noun')
		.min(2, 'Noun should be of minimum 2 characters length')
		.required('Noun is required'),
	adjective: yup
		.string('Enter an adjective')
		.min(2, 'Adjective should be of minimum 2 characters length')
		.required('AdjectiveNoun is required'),
	color: yup
		.string('Enter a color')
		.min(2, 'Color should be of minimum 2 characters length')
		.required('Color is required')
});

const WithMaterialUI = ({ addMadlib }) => {
	const formik = useFormik({
		initialValues: {
			noun: '',
			secondNoun: '',
			adjective: '',
			color: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			addMadlib({ ...values });
		}
	});

	return (
		<Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
			<form onSubmit={formik.handleSubmit} className="Form-box">
				<TextField
					fullWidth
					id="noun"
					name="noun"
					label="noun"
					value={formik.values.noun}
					onChange={formik.handleChange}
					error={formik.touched.noun && Boolean(formik.errors.noun)}
					helperText={formik.touched.noun && formik.errors.noun}
				/>
				<TextField
					fullWidth
					id="second-noun"
					name="secondNoun"
					label="noun 2"
					type="text"
					value={formik.values.secondNoun}
					onChange={formik.handleChange}
					error={formik.touched.secondNoun && Boolean(formik.errors.secondNoun)}
					helperText={formik.touched.secondNoun && formik.errors.secondNoun}
				/>
				<TextField
					fullWidth
					id="adjective"
					name="adjective"
					label="adjective"
					type="text"
					value={formik.values.adjective}
					onChange={formik.handleChange}
					error={formik.touched.adjective && Boolean(formik.errors.adjective)}
					helperText={formik.touched.adjective && formik.errors.adjective}
				/>
				<TextField
					fullWidth
					id="color"
					name="color"
					label="color"
					type="text"
					value={formik.values.color}
					onChange={formik.handleChange}
					error={formik.touched.color && Boolean(formik.errors.color)}
					helperText={formik.touched.color && formik.errors.color}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Create Story
				</Button>
			</form>
		</Box>
	);
};

export default WithMaterialUI;
