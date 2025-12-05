"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  image: string;
  background?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  if (!projects.length) return <p>Loading projects...</p>;

  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Introductieblok */}
      <section className="w-screen h-screen snap-start flex items-center justify-start px-6 md:px-20 relative bg-gray-900">
        <NavBar />
        <div className="text-white max-w-2xl">
          <p className="text-5xl font-bold mb-4">Hallo!</p>
          <p className="text-xl">Dit zijn mijn projecten.</p>
        </div>
      </section>

      {/* Projectsecties */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className="w-screen h-screen snap-start flex items-center justify-center px-6 md:px-20"
            style={{ backgroundColor: project.background }}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Tekstblok */}
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full text-white p-8">
                <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg mb-2">{project.description}</p>
                <p className="text-md font-semibold mb-4">
                  Rol: {project.role}
                </p>

                {/* Knop naar casestudy */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  Bekijk case study
                </Link>
              </div>

              {/* Afbeelding */}
              <div className="relative w-full md:w-1/2 h-[60vh] md:h-full p-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
