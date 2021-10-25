import React, { useRef } from 'react';
import receiptData from '../receiptData';

const Form = () => {
	const input = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		for (let i = 0; i < receiptData.length; i++) {
			if (
				receiptData[i].person.toLowerCase() !==
				input.current.value.toLowerCase()
			) {
				document.getElementById(receiptData[i].id).style.display = 'none';
			}
		}
	};

	return (
		<div className='form'>
			<input ref={input} placeholder='Search By Name'></input>
			<button onClick={handleSubmit} type='submit'>
				Submit
			</button>
		</div>
	);
};
export default Form;
