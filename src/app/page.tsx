export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Government Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <span className="font-bold">gov.py</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">ACCESO A LA INFORMACIÓN</a>
              <a href="#" className="hover:underline">PARTICIPE</a>
              <a href="#" className="hover:underline">LEGISLACIÓN</a>
              <a href="#" className="hover:underline">ÓRGANOS DEL GOBIERNO</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMDA2Q0JBIi8+Cjx0ZXh0IHg9IjMyIiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklHUDwvdGV4dD4KPC9zdmc+Cg=="
                  alt="IGP Logo" 
                  className="w-16 h-16"
                />
                <div>
                  <h1 className="text-2xl font-normal text-gray-700">Instituto Geográfico Paraguayo</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded">
                  <span className="text-sm">🇵🇾</span>
                  <span className="text-sm">🇺🇸</span>
                </div>
                <div className="flex items-center space-x-1 px-2 py-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <span className="text-sm text-gray-600">Otros idiomas</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Menu Toggle and Search */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Instituto Geográfico Paraguayo</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Buscar</span>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar"
                  className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="#" className="text-blue-600 hover:underline flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
            </a>
            <span className="text-gray-400">›</span>
            <a href="#" className="text-blue-600 hover:underline">Geociencias</a>
            <span className="text-gray-400">›</span>
            <a href="#" className="text-blue-600 hover:underline">Posicionamiento geodésico</a>
            <span className="text-gray-400">›</span>
            <span className="text-gray-700">Redes Geodésicas</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Redes Geodésicas</h1>
          
          {/* Description Section */}
          <div className="mb-8">
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4">
              <span className="font-semibold">Descripción</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Principales productos de este tema:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Mapa de las Redes del Sistema Geodésico Paraguayo</h3>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Red Altimétrica</h3>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Red Gravimétrica</h3>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">BDG - Banco de datos geodésicos</h3>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">RMPG - Red Mareográfica Permanente para Geodesia</h3>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Red Planialtimétrica</h3>
                </div>
              </div>

              {/* Product 7 */}
              <div className="bg-white border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">RBMC - Red Paraguaya de Monitoreo Continuo de Sistemas GNSS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Notice */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Utilizamos cookies para mejorar su experiencia de navegación en el portal. Para saber más sobre cómo tratamos los datos personales, consulte nuestra{' '}
            <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            CONTINUAR
          </button>
        </div>
      </div>

      {/* Accessibility Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}
