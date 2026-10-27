export default function RecapCard({ title }) {
  return (
    <a href="#" className="group block">
      <div className="bg-gray-100 aspect-video flex items-center justify-center border border-gray-200 mb-3 group-hover:border-black transition-colors rounded-sm">
        <span className="text-xs text-gray-400">Proyecto</span>
      </div>
      <p className="text-sm font-medium">{title}</p>
    </a>
  )
}