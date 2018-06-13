import _ from "lodash";
import $ from 'jquery';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers, selectBeer, similarBeers } from "../actions";

import Modal from 'react-modal';
import BeerModal from "../components/beer_modal";
import Loader from "../components/loader";
import { modalCustomStyles } from "../helpers/modalStyles"

Modal.setAppElement('.beers');

class BeerList extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
				page: 1,
				items: 0,
				modalIsOpen: false,
				loaderOn: true
			};

		this.loadMore = this.loadMore.bind(this);
		this.props.fetchBeers(this.state.page, () => {
			this.setState({loaderOn: false})
		});

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentWillMount() {
		document.addEventListener('scroll', this.loadMore);
	}
    
	renderBeers(beerData) {
		
		return _.map(beerData, beer => {
			const { id, name, tagline, image_url } = beer;
			return (
				<li key={id}
					className="beers__container__list-elements"
					onClick={() => this.openModal(beer)}
					>
					<img alt={tagline} 
						className="beers__container__list-elements__img" 
						src={image_url}
					></img>
					<h2 className="beers__container__list-elements__name" >{name}</h2>
					<p className="beers__container__list-elements__tagline" >{tagline}</p>
				</li>
			);
		});
	}

	loadMore() {
		let bottomReached = $(window).scrollTop() + $(window).height() === $(document).height(),
			listItemsCount = this.props.beers.length,
			terminate = this.props.beers[this.props.beers.length-1].length > 0;

		if ( bottomReached && terminate ) {

			this.setState({
				page: this.state.page + 1, 
				items: listItemsCount,
				loaderOn: true
			})
			this.props.fetchBeers(this.state.page, () => {
				this.setState({loaderOn: false})
			});
		}
	}

	openModal(beer) {
		this.setState({modalIsOpen: true});
		this.props.selectBeer(beer);
		this.props.similarBeers(beer);
	}
	afterOpenModal() {
		this.container.style.backgroundColor = '#000000';
	}
	closeModal() {
		this.container.style.backgroundColor = '#F8F8F8';
		this.setState({modalIsOpen: false});
	}

	render() {

		return (
			<div className="beers__container" ref={container => this.container = container}>
				<div className="beers__container__title">
					<span>Beer</span>
					<span>Guru</span>
				</div>
				<ul className="beers__container__list">
					{this.props.beers.map(this.renderBeers.bind(this))}
					<div className="beers__loader">
						<Loader 
							loading={this.state.loaderOn} 
							beers={this.props.beers}
						/>
					</div>
				</ul>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={modalCustomStyles}
					>
					<BeerModal
						selectedBeer={this.props.beer}
						similarBeers={this.props.similar}
						/>
				</Modal>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		beers: state.beers,
		beer: state.beer,
		similar: state.similar
	};
}
  
export default connect(mapStateToProps, { fetchBeers, selectBeer, similarBeers })(BeerList);