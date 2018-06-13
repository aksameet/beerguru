import { SIMILAR_BEERS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SIMILAR_BEERS:
			return action.payload.data;
		default:
			return state;
	}
}