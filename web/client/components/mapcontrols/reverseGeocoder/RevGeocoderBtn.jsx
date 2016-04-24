/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = require('react');
var ToggleButton = require('../../buttons/ToggleButton');
require("./reverseGeocoder.css");
const {clickOnMap} = require('../../../actions/map.js');


/**
 * A toggle button class for enabling a reverse geocoder request
 */
let RevGeocoderButton = React.createClass({
    propTypes: {
        key: React.PropTypes.string,
        isButton: React.PropTypes.bool,
        glyphicon: React.PropTypes.string,
        onClick: React.PropTypes.func
    },

    getInitialState(){
        return {
            pressed: false,
            point : {}
        }
    },

    getDefaultProps() {
        return {
            key: 'ReverseGeocoderButton',
            isButton: true,
            glyphicon: 'search'

        };
    },
    onClick: function() {
        this.state.pressed = !this.state.pressed;

        this.props.onClick(this.state.pressed);
    },


    render: function() {
        return (
            <ToggleButton
                key={this.props.key}
                isButton={this.props.isButton}
                glyphicon={this.props.glyphicon}
                pressed={this.props.pressed}
                onClick={this.onClick}/>
        );
    },

    componentWillReceiveProps: function (newProps){

       console.log("revgeocoderbtn received props:",newProps) ;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log("component should update");
        return this.props.value !== nextProps.value;

    }


});

module.exports = RevGeocoderButton;
