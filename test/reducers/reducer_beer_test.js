import { expect } from '../test_helper';
import { SELECTED_BEER } from '../../src/actions/types';
import BeerReducer from '../../src/reducers/reducer_beer';
import SelectedBeerReducer from '../../src/reducers/reducer_selected';

describe('Reducers', () => {
	describe('BeerReducer', () => {
		it('handles action with unknown type', () => {
			expect(BeerReducer(undefined, {})).to.eql([]);
		});
	});

	describe('SelectedBeerReducer', () => {
		it('handles action of type SELECTED_BEER', () => {
			const action = { type: SELECTED_BEER, payload: 'hello' };
			expect(SelectedBeerReducer([], action)).to.eql('hello');
		});
	});

});