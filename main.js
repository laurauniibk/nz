
var map = L.map('map').setView([45.873466, 11.799173], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([45.873466, 11.799173]).addTo(map);
marker.bindPopup("<strong>Monte Grappa</strong>").openPopup();
