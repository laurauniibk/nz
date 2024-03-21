var map = L.map('map').setView([-38.684444, 176.070833], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-38.684444, 176.070833]).addTo(map);
marker.bindPopup("<strong>Taupo</strong>").openPopup();