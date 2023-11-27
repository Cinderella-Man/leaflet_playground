
var map = L.map('map', {
    minZoom: 0,
    maxZoom: 0
});

var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(map);

map.setView([0, 0], 0);

L.control.scale().addTo(map);

setInterval(function(){
    map.setView([0, 0]);
    setTimeout(function(){
        map.setView([60, 0]);
    }, 2000);
}, 4000);

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

setInterval(function(){
    map.setZoom(0);
    setTimeout(function(){
        map.setZoom(1);
    }, 2000);
}, 4000);


// setView(center, zoom), which also sets the map center
// flyTo(center, zoom), like setView but with a smooth animation
// zoomIn() / zoomIn(delta), zooms in delta zoom levels, 1 by default
// zoomOut() / zoomOut(delta), zooms out delta zoom levels, 1 by default
// setZoomAround(fixedPoint, zoom), sets the zoom level while keeping a point fixed (what scrollwheel zooming does)
// fitBounds(bounds), automatically calculates the zoom to fit a rectangular area on the map