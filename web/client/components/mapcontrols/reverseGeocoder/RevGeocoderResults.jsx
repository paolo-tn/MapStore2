/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');
var BootstrapReact = require('react-bootstrap');
var Panel = BootstrapReact.Panel;

var React = require('react');
var assign = require('object-assign');
var {Glyphicon, Panel} = require('react-bootstrap');

const Draggable = require('react-draggable');

/**
 * A panel showing the reverse geocoding results
 *
 * Component's properies:
 *  - id: {string}            the components identifier
 *  - helpText: {string}      the text to display
 *  - isVisible: {bool}       flag to steer visibility of the badge
 *  - title (string)          header text of this panel
 */
var ReverseGeocodingResults = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        isVisible: React.PropTypes.bool,
        title: React.PropTypes.string,
        clickedMapPoint: React.PropTypes.object,
        doReverseGeocoding : React.PropTypes.func
    },
    getDefaultProps() {
        return {
            id: 'mapstore-rev-geocoder-panel',
            isVisible: false,
            title: 'RESULTS'
        };
    },

    //whenever the map is clicked, a new request is sent
    componentWillReceiveProps(newProps) {
        console.log("props received");
        doReverseGeocoding();
    },

    getResults(response){
        //TODO
        //parse reverse geocoding response

    },

    render() {
        return (<Panel
            defaultExpanded={true}
            collapsible={this.props.collapsible}
            id="mapstore-reverse-geocoder"
            style={this.props.style}>
            {this.getResults()}
        </Panel>);
    }
});

module.exports = ReverseGeocodingResults;
