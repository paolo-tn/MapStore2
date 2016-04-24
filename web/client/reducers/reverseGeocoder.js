/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var {CLICK_ON_MAP} = require('../actions/map');

var {
    REV_GEOCODER_READY,
    REV_GEOCODER_DISABLED,
    REV_GEOCODING_REQUEST,
    REV_GEOCODING_RESPONSE,
    REV_GEOCODING_ERROR
    } = require('../actions/reverseGeocoder.js');

const assign = require('object-assign');

function reverseGeocode(state = null, action) {
    switch (action.type) {
        case REV_GEOCODER_DISABLED:
            console.log("reducers says: REV_GEOCODER_DISABLED");
            return assign({}, state, {
                pressed: action.enabled
            });
        case REV_GEOCODER_READY:
            console.log("reducer says:  REV_GEOCODER_READY");
            return assign({}, state, {
                pressed: action.enabled

            });
        case CLICK_ON_MAP:
            console.log("reducer says: CLICK_ON_MAP");
            console.log(action.point);
            return assign({}, state, {
                point: action.point
            });
        case REV_GEOCODING_REQUEST:
            console.log("reducer says: REV_GEOCODING_REQUEST")
            return assign({}, state, {

            });
        case REV_GEOCODING_RESPONSE:
            console.log("reducer says: REV_GEOCODING_RESPONSE")
            return assign({}, state, {

            });
        case REV_GEOCODING_ERROR:
            console.log("reducer says: REV_GEOCODING_RESPONSE")
            return assign({}, state, {

            });

        default:
            return state;
    }
}

module.exports = reverseGeocode;
