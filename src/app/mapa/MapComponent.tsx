/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Cargar Leaflet dinámicamente
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !(window as any).L) {
        // Cargar CSS de Leaflet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Cargar JavaScript de Leaflet
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else if ((window as any).L && mapRef.current && !mapInstanceRef.current) {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = (window as any).L;

      // Crear el mapa (coordenadas centradas en Paraguay)
      const map = L.map(mapRef.current).setView([-25.3, -57.6], 6);
      mapInstanceRef.current = map;

      // Posicionar el control de zoom
      map.zoomControl.setPosition('topright');

      // Agregar capa base de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Variables para las capas
      let capaHidrografia: any = null;
      let capaPuntos: any = null;
      const capasBase = {};
      const capasSuperpuestas = {};

      // Control de capas
      const controlCapas = L.control.layers(capasBase, capasSuperpuestas).addTo(map);

      // Cargar hidrografía
      fetch('/hidrografia.geojson')
        .then(res => res.json())
        .then(data => {
          capaHidrografia = L.geoJSON(data, {
            style: {
              color: '#0066cc',
              weight: 2,
              opacity: 0.8
            },
            onEachFeature: function (feature: any, layer: any) {
              let popup = '';
              for (const key in feature.properties) {
                popup += `<strong>${key}:</strong> ${feature.properties[key]}<br>`;
              }
              layer.bindPopup(popup);
            }
          }).addTo(map);

          controlCapas.addOverlay(capaHidrografia, "🌊 Hidrografía");

          // Ajustar vista al bounds de la hidrografía
          map.fitBounds(capaHidrografia.getBounds());
        })
        .catch(error => {
          console.error('Error al cargar hidrografia.geojson:', error);
          // Mostrar mensaje de error en el mapa
          L.popup()
            .setLatLng([-25.3, -57.6])
            .setContent('<div style="color: red;"><strong>Error:</strong> No se pudo cargar la capa de hidrografía</div>')
            .openOn(map);
        });

      // Cargar puntos
      fetch('/puntos.geojson')
        .then(res => res.json())
        .then(data => {
          capaPuntos = L.geoJSON(data, {
            pointToLayer: function (feature: any, latlng: any) {
              return L.circleMarker(latlng, {
                radius: 6,
                fillColor: '#ff5733',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
              });
            },
            onEachFeature: function (feature: any, layer: any) {
              let popup = '';
              for (const key in feature.properties) {
                popup += `<strong>${key}:</strong> ${feature.properties[key]}<br>`;
              }
              layer.bindPopup(popup);
            }
          }).addTo(map);

          controlCapas.addOverlay(capaPuntos, "📍 Puntos de Interés");
        })
        .catch(error => {
          console.error('Error al cargar puntos.geojson:', error);
        });

      // Agregar escala
      L.control.scale().addTo(map);

      // Agregar información adicional
      const info = L.control({ position: 'bottomleft' });
      info.onAdd = function () {
        const div = L.DomUtil.create('div', 'map-info');
        div.innerHTML = `
          <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); font-size: 12px;">
            <strong>📍 Coordenadas:</strong> <span id="coordinates">-25.3, -57.6</span><br>
            <strong>🔍 Zoom:</strong> <span id="zoom-level">6</span>
          </div>
        `;
        return div;
      };
      info.addTo(map);

      // Actualizar coordenadas y zoom en tiempo real
      map.on('mousemove', function (e: any) {
        const coordsElement = document.getElementById('coordinates');
        if (coordsElement) {
          coordsElement.innerHTML = `${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`;
        }
      });

      map.on('zoomend', function () {
        const zoomElement = document.getElementById('zoom-level');
        if (zoomElement) {
          zoomElement.innerHTML = map.getZoom().toString();
        }
      });
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  );
};

export default MapComponent; 