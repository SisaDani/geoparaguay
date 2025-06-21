'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Importar Leaflet dinámicamente para evitar problemas de SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando mapa...</p>
    </div>
  </div>
});

export default function MapaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Visor Geoespacial - Hidrografía del Paraguay</h1>
              <p className="text-gray-600 mt-1">Sistema de información geográfica del Instituto Geográfico Paraguayo</p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mx-4 mt-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Instrucciones:</strong> Este visor muestra los datos de hidrografía pública desde archivos GeoJSON. 
              Haz clic en las líneas o puntos para ver los atributos. Usa los controles de capas para mostrar/ocultar elementos.
            </p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="mx-4 my-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-[calc(100vh-200px)]">
            <MapComponent />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-8 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Instituto Geográfico Paraguayo - Datos geoespaciales de Paraguay
          </p>
        </div>
      </div>
    </div>
  );
} 