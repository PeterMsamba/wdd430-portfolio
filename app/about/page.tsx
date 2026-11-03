import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-lg text-gray-300">
        I'm Peter Msamba, a full-stack developer and software engineering student based in Likuni, Lilongwe, Malawi.
      </p>
      
      {/* Rendering our custom component with typed props */}
      <SkillCard 
        category="Technical Skills" 
        skills={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Python', 'MongoDB']} 
      />
    </main>
  );
}