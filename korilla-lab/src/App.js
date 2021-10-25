import React from 'react';
import './App.css';
import Form from './components/Form';
import Receipts from './components/Receipts';
// import receiptData from './receiptData';

const App = () => {
	// const [receipt, setReceipt] = useState(receiptData);

	return (
		<div className='App'>
			<h1 className='app-name'>Korilla Receipts</h1>
			<div className='app-name'>
				<Form />
			</div>
			<Receipts />
		</div>
	);
};

export default App;
