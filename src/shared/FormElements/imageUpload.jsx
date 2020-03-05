import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';

const ImageUpload = (props) => {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState(false);

	const filePickerRef = useRef();

	// Should Trigger When The File Changes
	useEffect(() => {
		if (!file) {
			return;
		}
		// FileReader is a built in API
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickedHandler = (event) => {
		let pickedFile;
		let fileIsValid = isValid;
		// You get the files on the event.target if it is a native file picker
		// Ensures There has be only 1 File to Fire
		if (event.target.files && event.target.files.length === 1) {
			// Get the first and only file picked
			pickedFile = event.target.files[0];
			setFile(pickedFile);
			setIsValid(true); //Dosent update the state immideantly so set i manually
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}
		// Get onInput Prop Pointing to a Function
		props.onInput(props.id, pickedFile, fileIsValid);
	};

	const pickImageHandler = () => {
		filePickerRef.current.click();
	};

	return (
		<div className={props.className}>
			<input
				id={props.id}
				ref={filePickerRef}
				style={{ display: 'none' }}
				type='file'
				accept='.jpg,.png,.jpeg,.pdf'
				onChange={pickedHandler}
			/>
			<div className={`image-upload ${props.center && 'center'}`}>
				<div className='image-upload__preview'>
					{previewUrl && <img src={previewUrl} alt='Preview' />}
					{!previewUrl && <p>Please pick an image.</p>}
				</div>
				<Button type='button' onClick={pickImageHandler}>
					PICK IMAGE
				</Button>
			</div>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default styled(ImageUpload)`
	.image-upload.center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.image-upload__preview {
		width: 5rem;
		height: 5rem;
		border: 1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.image-upload__preview img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
