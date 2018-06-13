import { expect } from '../test_helper';
import { FETCH_BEERS } from '../../src/actions/types';
import { fetchBeers } from '../../src/actions';

describe('Actions', () => {
	describe('fetchBeers', () => {
		it('has the correct type', () => {
			const action = fetchBeers();
			expect(action.type).to.equal(FETCH_BEERS);
		});
	});
});