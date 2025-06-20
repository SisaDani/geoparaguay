const map = L.map('map').setView([-25.3, -57.6], 6);
map.zoomControl.setPosition('topright');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


let capaHidrografia = null;
let capaPuntos = null;
const CapasBase = {};
const capasSuperpuestas = {};

const controlCapas = L.control.layers(CapasBase, capasSuperpuestas).addTo(map);


// Cargar hidrografía
fetch('hidrografia.geojson')
    .then(res => res.json())
    .then(data => {
        capaHidrografia = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                let popup = '';
                for (const key in feature.properties) {
                    popup += `<strong>${key}:</strong> ${feature.properties[key]}<br>`;
                }
                layer.bindPopup(popup);
            }
        }).addTo(map);

        controlCapas.addOverlay(capaHidrografia, "Hidrografía");

        map.fitBounds(capaHidrografia.getBounds());
    })
    .catch(error => console.error ('Error al cargar puntos.geojson:', error));

    // Cargar puntos
    fetch('puntos.geojson')
    .then(res => res.json())
    .then(data => {
        capaPuntos = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: '#ff5733',
                    color: '#000',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                let popup = '';
                for (const key in feature.properties) {
                    popup += `<strong>${key}:</strong> ${feature.properties[key]}<br>`;
                }
                layer.bindPopup(popup);
            }
        }).addTo(map);

        controlCapas.addOverlay(capaPuntos, "Puntos de Interés")

    })
    .catch(error => console.error ('Error al cargar puntos.geoJson:', error));