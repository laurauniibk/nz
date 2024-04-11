let lat = -38.684444;
let lng = 176.070833;
let zoom = 9

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({ imperial: false }).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Taupo"
    }
};

L.geoJSON(jsonPunkt, {
}).bindPopup(function (layer) {
    return `
    <strong>This is ${layer.feature.properties.name}</strong>
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)}</li>
    </ul>
`;
}).addTo(map);