import ProjectCard from '../components/ProjectCard'

export default function Chapter() {
  return (
    <main className="px-6 md:px-16 py-12 md:py-16">
      
      {/* CABECERA (Header 2 columnas) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
        
        {/* Columna Izquierda: Textos y Filtros */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">
            03 | CAPÍTULO 01
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            El Brandizaje
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Identidad, branding y construcción de marca.
          </p>
          <p className="text-gray-500 mb-10 max-w-lg">
            Una selección de proyectos donde la estrategia, el diseño y la identidad se encuentran para dar forma a marcas con propósito.
          </p>
          
          {/* Filtros (Pills) */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-gray-200 text-black px-5 py-2 rounded-md text-sm font-bold">
              Todos (8)
            </button>
            <button className="bg-gray-50 text-gray-600 px-5 py-2 rounded-md text-sm font-bold border border-transparent hover:bg-gray-100 transition-colors">
              Branding
            </button>
            <button className="bg-gray-50 text-gray-600 px-5 py-2 rounded-md text-sm font-bold border border-transparent hover:bg-gray-100 transition-colors">
              Identidad
            </button>
          </div>
        </div>

        {/* Columna Derecha: Imagen Principal */}
        <div className="bg-[#f8f8f8] border border-gray-300 flex items-center justify-center min-h-[300px] md:min-h-full rounded-sm">
          <span className="text-sm text-gray-400">Imagen principal</span>
        </div>
        
      </section>

      {/* GRILLA DE PROYECTOS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
        <ProjectCard number="01" title="Marketing Mix" />
        <ProjectCard number="02" title="Finca Gracia María" />
        <ProjectCard number="03" title="Makro" />
        <ProjectCard number="04" title="ACCACIA" />
        <ProjectCard number="05" title="AR LEGAL" />
        <ProjectCard number="06" title="AP NETWORK" />
        <ProjectCard number="07" title="RQUIMICA" />
        <ProjectCard number="08" title="GIOVENTU" />
      </section>

    </main>
  )
}