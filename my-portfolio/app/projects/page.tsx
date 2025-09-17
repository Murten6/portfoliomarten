import { Project } from "../types";

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects");
  return res.json();
}

export default async function ProjectPage() {
  const projects: Project[] = await getProjects();

  return (
    <div>
      <h1>idk</h1>
    </div>
  );
}
