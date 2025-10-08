import { Project } from "../types";
import NavBar from "../_components/navigation/NavBar";

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects");
  return res.json();
}

export default async function ProjectPage() {
  const projects: Project[] = await getProjects();

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <h1>Projects</h1>
      </div>
    </>
  );
}
