import React from 'react';
import styled from 'styled-components';

import { useForm } from '../../../shared/Hooks/form-hook';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH
} from '../../../shared/Utils/Validators';
import Button from '../../../shared/FormElements/Button';
import Input from '../../../shared/FormElements/Input';
import ImageUpload from '../../../shared/FormElements/imageUpload';

import { White, Melon, Black } from '../../../styles/Colors';
import { BoxShadow2 } from '../../../styles/Shadows';

const BuyerUpload = (props) => {
	const [imageState, setImageState] = useForm(
		{
			image: {
				value: null,
				isValid: false
			}
		},
		false
	);
	const [formState, inputHandler] = useForm(
		// Initial Inputs For The useForm Hook
		{
			invoiceNumber: {
				value: '',
				isValid: false
			},
			sentDate: {
				value: '',
				isValid: false
			},
			dueDate: {
				value: '',
				isValid: false
			},
			subtotal: {
				value: '',
				isValid: false
			},
			tax: {
				value: '',
				isValid: false
			},
			total: {
				value: '',
				isValid: false
			},
			balanceDue: {
				value: '',
				isValid: false
			},
			service: {
				value: '',
				isValid: false
			},
			description: {
				value: '',
				isValid: false
			},
			vendor: {
				value: '',
				isValid: false
			}
		},
		// Initial Form Validity
		false
	);

	const imageSubmitHandler = (event) => {
		event.preventDefault();
		console.log(imageState.inputs);
	};
	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	return (
		<React.Fragment>
			<form className={props.className} onSubmit={imageSubmitHandler}>
				<ImageUpload center id='image' onInput={setImageState} />
				<Button
					className='button'
					style={{ margin: '1rem' }}
					type='submit'
					disabled={!imageState.isValid}
				>
					Process File
				</Button>
			</form>
			<form className={props.className} onSubmit={formSubmitHandler}>
				<Input
					id='invoiceNumber'
					element='input'
					type='text'
					label='Invoice Number'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='sentDate'
					element='input'
					type='text'
					label='Sent Date'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='dueDate'
					element='input'
					type='text'
					label='Due Date'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='subTotal'
					element='input'
					type='text'
					label='Sub Total'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='tax'
					element='input'
					type='text'
					label='Tax'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='total'
					element='input'
					type='text'
					label='Total'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='balanceDue'
					element='input'
					type='text'
					label='Balance Due'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='service'
					element='input'
					type='text'
					label='Service'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='vendor'
					element='input'
					type='text'
					label='Vendor'
					validators={[VALIDATOR_REQUIRE()]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Input
					id='description'
					element='input'
					type='text'
					label='Description'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid title.'
					onInput={inputHandler}
				/>
				<Button
					className='button'
					style={{ margin: '1rem' }}
					type='submit'
					disabled={!formState.isValid}
				>
					Save Invoice
				</Button>
			</form>
		</React.Fragment>
	);
};

export default styled(BuyerUpload)`
	list-style: none;
	margin: 0 auto;
	padding: 1rem;
	width: 90%;
	max-width: 40rem;
	box-shadow: ${BoxShadow2};
	border-radius: 6px;
	background: ${White};
	.button {
		background-color: ${Melon};
		color: ${Black};
		border: 1px solid ${Melon};
	}
`;
