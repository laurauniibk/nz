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
let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
    <strong>This is Taupo</strong>
    <ul>
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${lng.toFixed(5)}</li>
    </ul>
`).openPopup();
L.control.scale({ metric: true, imperial: false }).addTo(map);