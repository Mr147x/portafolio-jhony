import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <main className="px-6 md:px-16 py-8 md:py-12">
      
      {/* Volver a capítulo */}
      <div className="mb-8">
        <Link to="/capitulo-01" className="text-sm text-gray-500 hover:text-black transition-colors">
          ← Volver a capítulo
        </Link>
      </div>

      {/* Cabecera: Título, Etiquetas y Contador */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Marketing Mix</h1>
          <p className="text-sm text-gray-500">Branding | Identidad | Dirección visual</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-500 font-medium">
          01 / 08
        </div>
      </header>

      {/* Imagen / Video Principal */}
      <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-[#f8f8f8] flex items-center justify-center border border-gray-300 mb-8 rounded-sm">
        <span className="text-sm text-gray-400">Imagen / Video principal</span>
      </div>

      {/* Cajas de Concepto y Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 border border-gray-200 p-6 md:p-8 rounded-sm">
          <h3 className="text-lg font-bold mb-4">Concepto</h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Breve descripción del problema, enfoque creativo y solución visual del proyecto.
          </p>
        </div>
        <div className="md:col-span-1 border border-gray-200 p-6 md:p-8 rounded-sm">
          <h3 className="text-lg font-bold mb-4">Metadata</h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Cliente / Año / Servicios / Software
          </p>
        </div>
      </div>

      {/* Galería de Imágenes (Asimétrica) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        
        {/* Imagen grande izquierda */}
        <div className="bg-[#f8f8f8] flex items-center justify-center border border-gray-300 min-h-[300px] h-full rounded-sm">
          <span className="text-sm text-gray-400">Imagen del proyecto</span>
        </div>
        
        {/* Grilla 2x2 derecha */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#f8f8f8] aspect-[4/3] flex items-center justify-center border border-gray-300 rounded-sm">
            <span className="text-sm text-gray-400">Imagen</span>
          </div>
          <div className="bg-[#f8f8f8] aspect-[4/3] flex items-center justify-center border border-gray-300 rounded-sm">
            <span className="text-sm text-gray-400">Imagen</span>
          </div>
          <div className="bg-[#f8f8f8] aspect-[4/3] flex items-center justify-center border border-gray-300 rounded-sm">
            <span className="text-sm text-gray-400">Imagen</span>
          </div>
          <div className="bg-[#f8f8f8] aspect-[4/3] flex items-center justify-center border border-gray-300 rounded-sm">
            <span className="text-sm text-gray-400">Imagen</span>
          </div>
        </div>
        
      </div>

      {/* Navegación anterior / siguiente */}
      <div className="flex justify-between items-center text-sm text-gray-500 pb-12">
        <Link to="#" className="hover:text-black transition-colors">← Proyecto anterior</Link>
        <Link to="#" className="hover:text-black transition-colors">Siguiente proyecto →</Link>
      </div>

    </main>
  )
}