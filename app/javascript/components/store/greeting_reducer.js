import axios from 'axios';

const initialState = {
	greet: [],
	loading: false,
	error: null,
};

const greetingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_GREETING_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_GREETING_SUCCESS':
			return {
				...state,
				loading: false,
				greet: [action.payload],
			};
		case 'FETCH_GREETING_FAILURE':
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getGreeting = () => async (dispatch) => {
	dispatch({ type: 'FETCH_GREETING_REQUEST' });
	try {
		const response = await axios.get('/api/v1/greetings');
		dispatch({ type: 'FETCH_GREETING_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'FETCH_GREETING_FAILURE', payload: response.error });
	}
};

export default greetingReducer;
