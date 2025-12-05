"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";
import Link from "next/link";

// Project type definiëren
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
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth relative">
      <div className="absolute top-6 right-6 z-50">
        <NavBar />
      </div>

      <section className="w-screen h-screen snap-start flex items-center justify-start px-6 md:px-20 bg-purple-700">
        <div className="text-white max-w-2xl">
          <p className="text-4xl md:text-5xl font-bold mb-4">Mijn projecten</p>
          <p className="text-lg md:text-xl">
            Hier vind je een selectie van projecten waarin ik mijn
            UX/UI-vaardigheden heb toegepast. Van interactieve prototypes tot
            gebruikerstests, elk project laat zien hoe ik complexe problemen
            vertaal naar toegankelijke en gebruiksvriendelijke digitale
            oplossingen.
          </p>
        </div>
      </section>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={project.slug}
            className="w-screen h-screen snap-start flex items-center justify-center px-6 md:px-20"
            style={{ backgroundColor: project.background }}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl gap-8 md:gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full text-black p-4 md:p-8 shrink">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg mb-2">
                  {project.description}
                </p>
                <p className="text-sm md:text-md font-semibold mb-4">
                  Rol: {project.role}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 md:mt-6 inline-block bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-3 py-2 md:px-4 md:py-2 text-center text-sm md:text-base"
                >
                  Bekijk case study
                </Link>
              </div>

              <div className="flex justify-center items-center w-full md:w-1/2 p-4 md:p-8 shrink">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-contain rounded-lg max-w-full h-auto max-h-[30vh] md:max-h-[70vh]"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
