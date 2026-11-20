import { Suspense } from 'react';
import { connection } from 'next/server';
import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

async function SchoolProjectList() {
  await connection();

  let projects;
  try {
    projects = await getProjects('school');
  } catch {
    return (
      <p className="text-sm text-red-400">
        Unable to load projects right now. Please try again later.
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="text-sm opacity-75 text-gray-400">
        No school projects found.
      </p>
    );
  }

  return <ProjectList projects={projects} />;
}

function SchoolProjectListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div key={item} className="rounded border border-white/15 p-5 space-y-3">
          <div className="h-5 w-2/3 rounded bg-white/15" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-4/5 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}

export default function SchoolProjects() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">School Projects</h3>
      <Suspense fallback={<SchoolProjectListSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
