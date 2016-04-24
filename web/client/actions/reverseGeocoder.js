/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var axios = require('axios');

//admittable states
const REV_GEOCODER_READY     = 'REV_GEOCODER_READY';
const REV_GEOCODER_DISABLED  = 'REV_GEOCODER_DISABLED';
const REV_GEOCODING_REQUEST  = 'REV_GEOCODING_REQUEST';
const REV_GEOCODING_RESPONSE = 'REV_GEOCODING_RESPONSE';
const REV_GEOCODING_ERROR    = 'REV_GEOCODING_ERROR';




// private just return a public state
function error(){
    console.log("error while reverse geocoding");
    return {
        type: REV_GEOCODING_ERROR
    }
}

//private, just return a public state
function loadResults(data){
    console.log("loading results");
    return {
        type: REV_GEOCODING_RESPONSE,
        data: data
    }
}



//public methods

/**
 * changeState
 * invoked to change the state
 * @param enabled
 * @returns {{type: string, enabled: *}}
 */
function onClick(enabled){
    console.log("action says: enabled is",enabled);

    if(!enabled == true){
        return {
            type: REV_GEOCODER_DISABLED
        }
    }else{
        return {
            type: REV_GEOCODER_READY
        }
    }
}

/**
 * doReverseGeocoding
 * @param req
 */
function doReverseGeocoding(req){
    console.log("doReverseGeocoding");
    request = req;

    return (dispatch) => {
        dispatch(newMapInfoRequest(reqId, param));
        //MOCK
        axios.get('http://nominatim.openstreetmap.org/reverse?json_callback=cb&format=json&lat=-23.56320001&lon=-46.66140002&zoom=27&addressdetails=1').then((response) => {
            if (response.data) {
            dispatch(loadResults(response.data));
        } else {
            dispatch(error());
        }
    }).catch((e) => {
            dispatch(error());
    });
    };
}



module.exports = {
    REV_GEOCODER_READY,
    REV_GEOCODER_DISABLED,
    REV_GEOCODING_REQUEST,
    REV_GEOCODING_RESPONSE,
    REV_GEOCODING_ERROR,
    onClick,
    doReverseGeocoding
};
