import ChapterCard from '../components/ChapterCard'
import RecapCard from '../components/RecapCard'

export default function Home() {
  return (
    <>
      <main className="px-6 md:px-16 py-12 md:py-24">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ideas que se mueven.<br />
              Marcas que dejan huella.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-md">
              Branding, motion graphics y dirección visual para proyectos que conectan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Explorar trabajos
              </button>
              <button className="border border-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                Sobre mí
              </button>
            </div>
          </div>
          <div className="bg-gray-100 aspect-video flex items-center justify-center border border-gray-300 rounded-sm">
            <span className="text-gray-400 font-medium">Imagen / Video Hero</span>
          </div>
        </section>

        {/* SECCIÓN INTRO */}
        <section className="mt-20 md:mt-32 border-t border-gray-200 pt-12 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Intro</p>
              <h2 className="text-2xl md:text-3xl font-bold max-w-sm">
                Un portafolio sobre marcas en movimiento.
              </h2>
            </div>
            <div className="flex md:items-center">
              <p className="text-gray-500 text-lg">
                Este sitio organiza el portafolio en dos capítulos: identidad y movimiento.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN CAPÍTULOS */}
        <section className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChapterCard  link="/capitulo-01"
            title="Capítulo 01 | El Brandizaje"
            description="Preview con CTA hacia página de capítulo."
          />
          <ChapterCard  link="/capitulo-02"
            title="Capítulo 02 | Imagen Mutable"
            description="Preview con CTA hacia página de capítulo."
          />
        </section>

        {/* RECAP DE PROYECTOS */}
        <section className="mt-20 md:mt-32">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Recap de 5 proyectos</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Bloque breve para mostrar trabajos rápidos sin convertirlos en case studies completos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <RecapCard title="Marketing Mix" />
            <RecapCard title="Makro" />
            <RecapCard title="RQUIMICA" />
            <RecapCard title="La Bocha" />
            <RecapCard title="El Reto Bull" />
          </div>
        </section>

        {/* SECCIÓN SOBRE MÍ */}
        <section className="mt-20 md:mt-32 border-t border-gray-200 pt-12 md:pt-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Sobre mí</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="bg-gray-100 aspect-square flex items-center justify-center border border-gray-200 w-full max-w-[240px] rounded-sm shrink-0">
              <span className="text-sm text-gray-400">Foto / Perfil</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Diseño marcas, muevo ideas.
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Perfil corto + servicios + software. Esta sección puede abrir a una página About completa si el sitio crece.
              </p>
            </div>
            <div className="md:pl-8">
              <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Servicios</h4>
              <ul className="text-gray-600 text-sm md:text-base space-y-1">
                <li>Branding</li>
                <li>Dirección de arte</li>
                <li>Motion graphics</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* SECCIÓN REDES SOCIALES / FOOTER */}
      <footer className="mt-20 md:mt-32 border-t border-gray-200 pt-12 md:pt-20 pb-12 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Final | Redes sociales</h2>
            <p className="text-gray-500 text-sm md:text-base">Conectemos en otras plataformas.</p>
          </div>
          
          <div className="flex gap-4 sm:gap-6">
            {['Instagram', 'Behance', 'LinkedIn', 'Email'].map((network) => (
              <a key={network} href="#" className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors rounded-sm">
                </div>
                <span className="text-xs text-gray-500 group-hover:text-black transition-colors">{network}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}