import React from 'react';

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Government Portal Header */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm hover:underline">Portal del Gobierno Paraguayo</a>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:underline">Acceso a la información</a>
              <a href="#" className="hover:underline">Participe</a>
              <a href="#" className="hover:underline">Legislación</a>
              <a href="#" className="hover:underline">Órganos del Gobierno</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IGP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Instituto Geográfico Paraguayo</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                Cambiar a modo de alto contraste
              </button>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded">
                  <span>🇪🇸</span>
                  <span>Español</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 bg-gray-200 text-gray-700 rounded">
                  <span>🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="pb-4">
            <div className="max-w-md">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Buscar..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Estadísticas</button>
            </div>
            <div className="relative group">
              <button className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded">Geociencias</button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Panel de Indicadores</button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Ciudades y Departamentos</button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Nuestros Sitios</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">Geociencias</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">Informaciones sobre posicionamiento geodésico</a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Redes Geodésicas</span>
            <span className="text-gray-400">•</span>
            <a href="/mapa" className="text-blue-600 hover:text-blue-800 font-medium">🗺️ Ver Mapa Interactivo</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Redes Geodésicas</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm">ℹ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Descripción</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Conjunto de informaciones planimétricas, altimétricas y gravimétricas referentes a las estaciones del 
              Sistema Geodésico Paraguayo - SGP utilizadas para referencia en actividades de posicionamiento y a las 
              demás estaciones establecidas por el IGP para corrección y verificación de imágenes del territorio.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Principales productos de este tema:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">🗺️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Mapa de las Redes del Sistema Geodésico Paraguayo</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Visualización completa de todas las estaciones geodésicas del territorio nacional.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📏</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Red Altimétrica</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Datos de elevación y referencias altimétricas del territorio paraguayo.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-lg">⚖️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Red Gravimétrica</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Mediciones gravimétricas para estudios geodésicos y geofísicos.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">💾</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">BDG - Banco de datos geodésicos</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Base de datos centralizada con toda la información geodésica nacional.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-lg">🌊</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">RMPG - Red Mareográfica Permanente para Geodesia</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Sistema de monitoreo permanente del nivel del mar para referencias geodésicas.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-lg">📊</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Red Planialtimétrica</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Coordenadas planimétricas y altimétricas de referencia nacional.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-lg">📡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">RBMC - Red Paraguaya de Monitoreo Continuo de Sistemas GNSS</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Red de estaciones de monitoreo continuo GPS/GNSS para posicionamiento preciso.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">¿Esta información fue útil?</span>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                  Sí
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  No
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">¿Qué podemos hacer para mejorar?</p>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Sus comentarios..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">MÁS INFORMACIÓN</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Estadísticas de Acceso al Sitio</a></li>
                <li><a href="#" className="hover:text-blue-400">Encuesta de Evaluación de Servicios</a></li>
                <li><a href="#" className="hover:text-blue-400">Transparencia y Rendición de Cuentas</a></li>
                <li><a href="#" className="hover:text-blue-400">Licitaciones y Contratos</a></li>
                <li><a href="#" className="hover:text-blue-400">Trabaje con Nosotros</a></li>
                <li><a href="#" className="hover:text-blue-400">Enlaces</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">REDES SOCIALES</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700">f</a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700">📷</a>
                <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">🎵</a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500">🐦</a>
                <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700">▶️</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">ATENCIÓN</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Canales de Atención</a></li>
                <li><a href="#" className="hover:text-blue-400">0800 123 4567</a></li>
                <li><a href="#" className="hover:text-blue-400">Defensoría del Pueblo</a></li>
              </ul>
              
              <h4 className="font-bold mb-4 mt-6">APPS IGP</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Descargar para iPhone</a></li>
                <li><a href="#" className="hover:text-blue-400">Descargar para Android</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">TRANSPARENCIA</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Acceso a la Información</a></li>
                <li><a href="#" className="hover:text-blue-400">Portal de la Transparencia</a></li>
              </ul>
              
              <h4 className="font-bold mb-4 mt-6">PRIVACIDAD</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Términos de Uso y Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm hover:text-blue-400">gov.py</a>
              <a href="#" className="text-sm hover:text-blue-400">Acceso a la Información</a>
              <a href="#" className="text-sm hover:text-blue-400">Participante del Programa Nacional de Prevención a la Corrupción</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Notice */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            Utilizamos cookies para mejorar su experiencia de navegación en el portal. 
            Para saber más sobre cómo tratamos los datos personales, consulte nuestra 
            <a href="#" className="underline hover:text-blue-300">Política de Privacidad.</a>
          </p>
          <button className="bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-gray-100">
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
} 