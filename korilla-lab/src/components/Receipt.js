import React, { useState } from 'react';
import receiptData from '../receiptData';

const Receipt = () => {
	const [toggle, setToggle] = useState('false');

	const toggler = () => {
		setToggle((prev) => !prev);
		console.log('ye');
		console.log(toggle);
	};

	let foodOrder = receiptData.map((order, index) => {
		if (order.paid === true) {
			return (
				<div className='receipt' id={order.id} key={index}>
					<h1>{order.person}</h1>
					<h4>{order.order.main}</h4>
					<br />
					<hr />
					<br />
					<ul className='order'>
						<li className='food-item'>Protein: {order.order.protein}</li>
						<li className='food-item'>Rice: {order.order.rice}</li>
						<li className='food-item'>Sauce: {order.order.sauce}</li>
						<li className='food-item'>Drink: {order.order.drink}</li>
						<li className='food-item'>Cost: ${order.order.cost}</li>
						<li className='food-item' onClick={toggler}>
							Paid: True
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className='receipt' id={order.id} key={index}>
					<h1>{order.person}</h1>
					<h4>{order.order.main}</h4>
					<br />
					<hr />
					<br />
					<ul className='order'>
						<li className='food-item'>Protein: {order.order.protein}</li>
						<li className='food-item'>Rice: {order.order.rice}</li>
						<li className='food-item'>Sauce: {order.order.sauce}</li>
						<li className='food-item'>Drink: {order.order.drink}</li>
						<li className='food-item'>Cost: ${order.order.cost}</li>
						<li className='food-item' onClick={toggler}>
							Paid: False
						</li>
					</ul>
				</div>
			);
		}
	});
	return <div className='container'>{foodOrder}</div>;
};

export default Receipt;
