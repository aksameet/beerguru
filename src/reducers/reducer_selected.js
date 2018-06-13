import { SELECTED_BEER } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case SELECTED_BEER:
			return action.payload;
		default:
			return state;
	}
}