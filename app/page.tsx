import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Hostel Management Application',
    description: 'Application that enable landlord and student to manage the hostel',
    technologies: ['JavaScript', 'Html', 'CSS'],
    link: 'https://github.com/PeterMsamba/pickford_hostel'
  },
  {
    title: 'English Chat Booking Application',
    description: 'An application that helps user to copy paste google link to view available slots to book english chat sessions',
    technologies: ['JavaScript', 'Html', 'CSS'],
    link: 'https://github.com/PeterMsamba/chatbooking'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}