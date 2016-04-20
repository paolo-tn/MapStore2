/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var {CLICK_ON_MAP} = require('../actions/map');

var {
    CHANGE_REV_GEOCODER_STATE,
    NEW_REV_GEOCODING_REQ,
    LOAD_RESULTS,
    ERROR_REV_GEOCODING
    } = require('../actions/reverseGeocoder.js');

const assign = require('object-assign');

function reverseGeocode(state = null, action) {
    switch (action.type) {
        case CHANGE_REV_GEOCODER_STATE:
            console.log("CHANGE_REV_GEOCODER_STATE");
            return assign({}, state, {
                enabled: action.enabled
            });
        case CLICK_ON_MAP:
            console.log("CLICK_ON_MAP");
            console.log(action.point);
            return assign({}, state, {
                point: action.point
            });
        case NEW_REV_GEOCODING_REQ:
            return assign({}, state, {

            });
        case LOAD_RESULTS:
            return assign({}, state, {

            });
        case ERROR_REV_GEOCODING:
            return assign({}, state, {

            });

        default:
            return state;
    }
}

module.exports = reverseGeocode;
