import _ from "lodash";
import React, { Component } from 'react'
import Loader from "../components/loader";

export default class BeerModal extends Component {

    constructor(props) {
		super(props);
	
		this.state = {
            similarBeers: [],
            updatedSimilar: true
			};
    }

    componentDidUpdate() {
        if (this.state.updatedSimilar) {
            this.setState({
                similarBeers: this.props.similarBeers,
                updatedSimilar: false
            })
        }
    }

    foodPairing(food_pairing) {
        return _.map(food_pairing, pairs => {
            return (
                <div key={pairs}>
                    <p>- {pairs}</p>
                </div>
            
            )
        })
    }

    renderSimilar(similar) {
        const { id, image_url, name } = similar
        return (
            <div className="beer__modal__suggestions-items" key={id}>
                <img className="beer__modal__suggestions-items__img" src={image_url} alt=""/>
                <p className="beer__modal__suggestions-items__name">{name}</p>
            </div>
        )
    }

    render() {

        const { name, tagline, image_url, abv, ebc, ibu, description, food_pairing } = this.props.selectedBeer;
        let loaderDependentStyles = `beers__loader__similar-beers ${this.state.updatedSimilar ? '' : 'hidden'}`;
        return (
            <div className="beer__modal">
                <div className="beer__modal__selected-container">
                    <div className="beer__modal__selected__img-wrapper">
                        <img className="beer__modal__selected__img" src={image_url} alt={tagline}/>
                    </div>
                    <div className="beer__modal__selected-description">
                        <h3 className="beer__modal__selected-description__name">{name}</h3>
                        <h4 className="beer__modal__selected-description__tagline">{tagline}</h4>
                        <span className="beer__modal__selected-description__line"></span>
                        <div className="beer__modal__selected-description__detalis">
                            <p>IBU: <span>{ibu}</span></p>
                            <p>ABV: <span>{abv}%</span></p>
                            <p>EBC: <span>{ebc}</span></p>
                        </div>
                        <p className="beer__modal__selected-description__description">{description}</p>
                        <div className="beer__modal__selected-description__food-pairing">
                            <p>Best Served With:</p>
                            {this.foodPairing(food_pairing)}
                        </div>
                    </div>
                    <div className="beer__modal__suggestions-container">
                        <p>You might also like:</p>
                        <div className={loaderDependentStyles}>
                            <Loader
                                loading={this.state.updatedSimilar} 
                                beers={this.state.similarBeers}
                            />
                        </div>
                        {this.state.similarBeers.map(this.renderSimilar.bind(this))}
                    </div>
                </div>
            </div>
        )
    }
}