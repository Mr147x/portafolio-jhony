import { Link } from 'react-router-dom'

export default function ChapterCard({ title, description, link }) {
  return (
    <Link to={link} className="group block border border-gray-200 p-6 md:p-8 hover:border-black transition-colors rounded-sm">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-500 text-sm md:text-base">{description}</p>
        </div>
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 flex items-center justify-center border border-gray-200 shrink-0">
          <span className="text-xs text-gray-400">Img</span>
        </div>
      </div>
    </Link>
  )
}