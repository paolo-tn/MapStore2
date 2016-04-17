/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const RevGeocoderButton = require('../../components/mapcontrols/reverseGeocoder/RevGeocoderBtn');
const Message = require('../../components/I18N/Message');

const ReverseGeocoder = React.createClass({
    propTypes: {
        isPanel: React.PropTypes.bool,
        changeState: React.PropTypes.func

    },
    contextTypes: {
        messages: React.PropTypes.object
    },
    render() {
        console.log("rendering button");
        return (
            <RevGeocoderButton {...this.props} tooltip={<Message msgId="reverseGeocoder.tooltip"/>}/>
        );
    }
});
module.exports = ReverseGeocoder;
