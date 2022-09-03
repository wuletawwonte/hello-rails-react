import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from './store/greeting_reducer';

const Greeting = () => {
	const dispatch = useDispatch();
	const { loading, error, greet } = useSelector((state) => state.greeting);

	useEffect(() => {
		dispatch(getGreeting());
	}, []);

	return (
		<div>
			<h1>{greet}</h1>
			{loading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			<button onClick={() => dispatch(getGreeting())}>Get Greeting</button>
		</div>
	);
};

export default Greeting;
