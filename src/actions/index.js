import axios from "axios";
import _ from 'lodash';
import { FETCH_BEERS, SELECTED_BEER, SIMILAR_BEERS } from './types';

const ROOT_URL = 'https://api.punkapi.com/v2/beers';

export function fetchBeers(page, callback) {

	const url = `${ROOT_URL}?page=${page}&per_page=20`;

	const response = axios
						.get(url)
						.then((response) => {
							callback();
							return response;
						});

		return {
			type: FETCH_BEERS,
			payload: response
		}
}

export function selectBeer(beer) {

	return {
		type: SELECTED_BEER,
		payload: beer
	};
}

export function similarBeers(beer) {
	const { abv, ibu, ebc } = beer;

	const url = `${ROOT_URL}?abv_gt=${_.round(abv)}&ibu_gt=${_.round(ibu)}&ebc_gt=${_.round(ebc)}&per_page=3`;
	const request = axios.get(url);

	return {
		type: SIMILAR_BEERS,
		payload: request
	};
}