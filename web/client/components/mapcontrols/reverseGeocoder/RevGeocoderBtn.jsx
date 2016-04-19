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

/**
 * A toggle button class for enabling a reverse geocoder request
 */
let RevGeocoderButton = React.createClass({
    propTypes: {
        key: React.PropTypes.string,
        isButton: React.PropTypes.bool,
        glyphicon: React.PropTypes.string,
        onClick: React.PropTypes.func,
        pressed: React.PropTypes.bool


    },

    getDefaultProps() {
        return {
            key: 'ReverseGeocoderButton',
            isButton: true,
            glyphicon: 'search'
        };
    },
    onClick: function() {
        console.log(this.props.pressed);

        this.props.onClick(!this.props.pressed);
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
    }
});

module.exports = RevGeocoderButton;
