/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const CHANGE_MAP_VIEW = 'CHANGE_MAP_VIEW';
const CLICK_ON_MAP = 'CLICK_ON_MAP';
const CHANGE_MOUSE_POINTER = 'CHANGE_MOUSE_POINTER';
const CHANGE_ZOOM_LVL = 'CHANGE_ZOOM_LVL';
const PAN_TO = 'PAN_TO';
const ZOOM_TO_EXTENT = 'ZOOM_TO_EXTENT';
const CHANGE_MAP_CRS = 'CHANGE_MAP_CRS';


function changeMapView(center, zoom, bbox, size, mapStateSource, projection) {
    return {
        type: CHANGE_MAP_VIEW,
        center,
        zoom,
        bbox,
        size,
        mapStateSource,
        projection
    };
}

function changeMapCrs(crs) {
    return {
        type: CHANGE_MAP_CRS,
        crs: crs
    };
}


function clickOnMap(point) {
    return {
        type: CLICK_ON_MAP,
        point: point
    };
}

function changeMousePointer(pointerType) {
    return {
        type: CHANGE_MOUSE_POINTER,
        pointer: pointerType
    };
}

function changeZoomLevel(zoomLvl, mapStateSource) {
    return {
        type: CHANGE_ZOOM_LVL,
        zoom: zoomLvl,
        mapStateSource: mapStateSource
    };
}

function panTo(center) {
    return {
        type: PAN_TO,
        center
    };
}

function zoomToExtent(extent, crs) {
    return {
        type: ZOOM_TO_EXTENT,
        extent,
        crs
    };
}

module.exports = {
    CHANGE_MAP_VIEW,
    CLICK_ON_MAP,
    CHANGE_MOUSE_POINTER,
    CHANGE_ZOOM_LVL,
    PAN_TO,
    ZOOM_TO_EXTENT,
    CHANGE_MAP_CRS,
    changeMapView,
    clickOnMap,
    changeMousePointer,
    changeZoomLevel,
    changeMapCrs,
    zoomToExtent,
    panTo
};
