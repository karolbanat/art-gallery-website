const latitude = 41.48142880743038;
const longitude = -71.31032811518855;

const map = L.map('map-art-gallery').setView([latitude, longitude], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markerIcon = L.icon({
	iconUrl: './dist/assets/map-marker.png',
	iconSize: [35, 45],
	iconAnchor: [0, 50],
});

const marker = L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);
