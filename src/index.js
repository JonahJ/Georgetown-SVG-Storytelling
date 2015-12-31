import 'babel-polyfill'

import CanvasMap from './canvas-map'

let map = CanvasMap({
    textContainer: document.querySelector('.text'),
    mapSrc: 'img/map-dc.svg',
    trailVisitedColor: '#47DBB4',
    fontPresentColor: '#5D5C56',
}).appendTo('.container')


// var descriptions_by_account_name = {};

// var extra_data_url = 'js/extra_data.json';
//     var carto_settings = {
//         hide_heatmap_on: 13,
//         url: 'https://gtucommunityoutreach.cartodb.com/api/v2/viz/f433ec36-445c-11e5-b6a9-0e0c41326911/viz.json',
//         options: {
//             shareable: false,
//             title: false,
//             description: false,
//             search: false,
//             zoomControl: true,
//             loaderControl: false,
//             // center_lat: true,
//             // center_lon: true,
//             center: [38.9007, -77.0164],
//             // center: [-42.27730877423707, 172.63916015625],
//             zoom: 12,
//             cartodb_logo: false,
//             infowindow: false,
//             time_slider: false,
//             layer_selector: false,
//             legends: false,
//             https: false,
//             scrollwheel: false,
//             fullscreen: true,
//             // mobile_layout: true,
//             force_mobile: false,
//             // gmaps_base_type: true,
//             // gmaps_style: true,
//             no_cdn: false,
//         }
//     }



// function loadJSON(file, callback) {
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', file, true);
//     xobj.onreadystatechange = function() {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             callback(JSON.parse(xobj.responseText));
//         }
//     };
//     xobj.send(null);
// }

// var main = function(json_data) {


//     /**
//      * Process link data
//      */
//     json_data.forEach(function(val, i, arr) {
//         /**
//          * Link on 'GUCE Account Name'
//          */

//         // console.log(val['GUCE Account Name']);
//         descriptions_by_account_name[val['GUCE Account Name'].toLowerCase()] = val;
//     });



//     // console.log(json_data);
//     /**
//      * Add map
//      */
//     cartodb
//         .createVis('map', carto_settings.url, carto_settings.options)
//         .done(function(vis, _layers) {
//             // ll = _layers; // TODO for debug
//             /**
//              * Clear layer buttons just incase... should only be happening on
//              * local dev machine
//              */
//             // d3.select('#layers').html('');

//             // /**
//             //  * Assign Layers
//             //  */
//             // var layers = {
//             //     'Heatmap': new Layer({
//             //         name: 'Heatmap',
//             //         layer: _layers[2],
//             //         defaultShow: true,
//             //         heatmap: true,
//             //         glyphicon_class: 'glyphicon glyphicon-fire'
//             //     }),
//             //     'Community Outreach': new Layer({
//             //         name: 'Engagement Activities',
//             //         layer: _layers[1].getSubLayer(0),
//             //         defaultShow: false,
//             //         hoverInfo: true,
//             //         glyphicon_class: 'glyphicon glyphicon-user',
//             //         // link_data: json_data,
//             //     }),
//             //     // 'Homeless Shelters': new Layer({
//             //     //     name: 'Homeless Shelters',
//             //     //     layer: _layers[1].getSubLayer(1),
//             //     //     defaultShow: false,
//             //     //     hoverInfo: true,
//             //     //     glyhicon_class: 'glyphicon glyphicon-th-large',
//             //     // }),
//             //     'D.C. Wards': new Layer({
//             //         name: 'D.C. Wards',
//             //         layer: _layers[1].getSubLayer(1),
//             //         defaultShow: false,
//             //         glyphicon_class: 'glyphicon glyphicon-th-large',
//             //     }),
//             // };
//             // /**
//             //  * Append layer buttons
//             //  */
//             // for (var layer_key in layers) {
//             //     var layer = layers[layer_key];
//             //     layer.makeLayerButton();
//             // }
//             // /**
//             //  * Hide heatmap when zoomed in
//             //  */
//             // vis.map.on('change:zoom', function() {
//             //     /**
//             //      * Only hide heatmap if not set my default
//             //      */
//             //     // console.log(layers['Heatmap'].click_enabled);
//             //     if (layers['Heatmap'].click_enabled === true) {
//             //         return;
//             //     }
//             //     /**
//             //      * If too zoomed in, hide layer
//             //      */
//             //     if (vis.map.getZoom() <= carto_settings.hide_heatmap_on) {
//             //         layers['Heatmap'].forceHide();
//             //         layers['Community Outreach'].forceShow();
//             //         layers['D.C. Wards'].forceShow();
//             //     }
//             // });
//         });
// };

// loadJSON(extra_data_url, main);
