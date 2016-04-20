/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var axios = require('axios');

//admittable states
const CHANGE_REV_GEOCODER_STATE = 'CHANGE_REV_GEOCODER_STATE';
const NEW_REV_GEOCODING_REQ = 'NEW_REV_GEOCODING_REQ';
const LOAD_RESULTS = 'LOAD_RESULTS';
const ERROR_REV_GEOCODING = 'ERROR_REV_GEOCODING';




// private just return a public state
function error(){
    console.log("error while reverse geocoding");
    return {
        type: ERROR_REV_GEOCODING
    }
}

//private, just return a public state
function loadResults(data){
    console.log("loading results");
    return {
        type: LOAD_RESULTS,
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
    console.log("in action.onClick");

    /*JUST FOR MOCK DO THE CALL HERE!
    axios.get('http://nominatim.openstreetmap.org/reverse?json_callback=cb&format=json&lat=-23.56320001&lon=-46.66140002&zoom=27&addressdetails=1').then((response) => {
        if (response.data) {
            console.log(response);
        } else {
            console.log(error);
        }
    }).catch((e) => {
            console.log(e);
    });
   */
    return {
        type: CHANGE_REV_GEOCODER_STATE,
        enabled: enabled
    };
}

/**
 * doReverseGeocoding
 * @param req
 */
function doReverseGeocoding(req){
    console.log("doReverseGeocoding");
    request = req;

    return (dispatch) => {
        //dispatch(newMapInfoRequest(reqId, param));
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
    NEW_REV_GEOCODING_REQ,
    CHANGE_REV_GEOCODER_STATE,
    LOAD_RESULTS,
    ERROR_REV_GEOCODING,
    onClick,
    doReverseGeocoding
};
