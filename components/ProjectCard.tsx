interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow-sm">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      <p className="text-sm text-gray-400 mb-2">
        <strong className="text-gray-200">Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">View Project</a>
        </p>
      )}
    </article>
  );
}
