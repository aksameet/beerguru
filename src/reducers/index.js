import { combineReducers } from "redux";
import BeerReducer from "./reducer_beer";
import SelectedBeerReducer from "./reducer_selected";
import SimilarBeersReducer from "./reducer_similar-beers";

const rootReducer = combineReducers({
	beers: BeerReducer,
	beer: SelectedBeerReducer,
	similar: SimilarBeersReducer
});

export default rootReducer;