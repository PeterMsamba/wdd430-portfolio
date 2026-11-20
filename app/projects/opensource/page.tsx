import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

export default async function OpenSourceProjects() {
  await connection();

  let projects;
  try {
    projects = await getProjects('opensource');
  } catch {
    return (
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Open Source Projects</h3>
        <p className="text-sm text-red-400">
          Unable to load projects right now. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Open Source Projects</h3>
      {projects.length === 0 ? (
        <p className="text-sm opacity-75 text-gray-400">
          No open source projects found.
        </p>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}
