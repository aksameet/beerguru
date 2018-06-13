import React, { Component } from 'react'

export default class Loader extends Component {

    constructor(props) {
		super(props);
	
		this.state = {
                checkTrigered: false,
                loadMore: true
			};
    }

    componentDidUpdate() {
        let itemsArray = this.props.beers;

        if (itemsArray.length > 0) {
            let lastResponseWasEmpty = itemsArray[itemsArray.length-1].length === 0;
            
            if ( lastResponseWasEmpty && !this.state.checkTrigered) {
                this.setState({
                    checkTrigered: true,
                    loadMore: false
                })
            }
        }
    }

    render() {
        let loading = this.props.loading;

        if (loading && this.state.loadMore) {
            return (
                <div className="beers__loader-container">
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                </div>
            )
        } else if (!this.state.loadMore) {
            return (
                <div className="beers__loader-container">
                    <p className="beers__loader-ending">You have reached the api limits</p>
                </div>
            )
        } else {
            return null;
        }

    }
}