interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700 mt-6">
      <h3 className="text-xl font-bold text-blue-400 mb-2">{category}</h3>
      <p className="text-gray-300">
        <strong className="text-white">Proficiencies:</strong> {skills.join(', ')}
      </p>
    </div>
  );
}