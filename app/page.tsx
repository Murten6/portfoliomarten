"use client";

import { useState, useEffect } from "react";
import NavBar from "./_components/navigation/NavBar";
import Image from "next/image";
import Link from "next/link";

// Type voor project
interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // JSON clientside ophalen
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  // Slideshow
  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects]);

  if (projects.length === 0) return <p>Loading projects...</p>;

  return (
    <div className="w-screen min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth relative">
      <div className="absolute top-6 right-6 z-50">
        <NavBar />
      </div>

      <section className="w-screen h-screen snap-start flex flex-col items-center justify-center bg-blue-500 text-white">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Portfolio Website</h1>
          <p className="text-2xl font-semibold">Marten Fleuren</p>
        </div>

        <div className="relative w-[600px] max-w-[90%] h-[400px] rounded-lg overflow-hidden">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.slug}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block bg-white text-gray-900 font-semibold rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-300"
                >
                  Bekijk case study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
