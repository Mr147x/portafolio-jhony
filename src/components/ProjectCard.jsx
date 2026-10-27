import { Link } from 'react-router-dom'

export default function ProjectCard({ number, title }) {
  return (
    <Link to="/proyecto" className="group block">
      <div className="bg-[#f8f8f8] aspect-[2.5/1] flex items-center justify-center border border-gray-300 mb-3 group-hover:border-black transition-colors rounded-sm">
        <span className="text-sm text-gray-400">Imagen</span>
      </div>
      <p className="text-sm md:text-base font-medium text-gray-800">
        <span className="mr-1">{number}</span> {title}
      </p>
    </Link>
  )
}