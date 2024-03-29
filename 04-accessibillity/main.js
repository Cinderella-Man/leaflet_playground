
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.4501, 30.5234],
    {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');