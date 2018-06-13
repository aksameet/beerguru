import React, { Component } from "react";

import BeerList from "../components/beer_list";

export default class App extends Component {
    render() {
        return (
            <div>
                <BeerList />
            </div>
        );
    }
}