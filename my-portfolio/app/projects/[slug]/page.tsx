"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Project {
  slug: string;
  title: string;
  explanation?: string;
  role?: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  background?: string;
  overview?: string;
  problem?: string;
  research?: string;
  architecture?: string;
  wireframes?: string;
  visualDesign?: string;
  testing?: string;
  finalDesigns?: string;
  learnings?: string;
  prototypeLinks?: {
    prot1?: string;
    prot2?: string;
  };
}

export default function ProjectSlugPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <p>Loading or Project not found</p>;

  const sections: { title: string; content?: string }[] = [
    { title: "Overview", content: project.overview },
    { title: "Problem & Goal", content: project.problem },
    { title: "Research", content: project.research },
    { title: "Architecture", content: project.architecture },
    { title: "Wireframes", content: project.wireframes },
    { title: "Visual Design", content: project.visualDesign },
    { title: "Usability Testing", content: project.testing },
    { title: "Final Designs", content: project.finalDesigns },
    { title: "Learnings", content: project.learnings },
  ];

  const sectionImages: (string | undefined)[] = [
    project.image2,
    project.image3,
    project.image4,
    project.image5,
    project.image6,
    project.image7,
  ];

  return (
    <div
      className="w-screen min-h-screen px-6 md:px-20 py-10 pb-40"
      style={{ backgroundColor: project.background || "#f5f5f5" }}
    >
      {project.image && (
        <div className="w-full flex justify-center mb-10">
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={100}
            className="rounded-lg object-contain"
          />
        </div>
      )}

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-4">{project.title}</h1>
        {project.role && (
          <p className="text-xl font-semibold text-black">{project.role}</p>
        )}
        {project.explanation && (
          <p className="mt-4 text-black max-w-3xl mx-auto">
            {project.explanation}
          </p>
        )}
      </div>

      {sections.map(
        (sec, index) =>
          sec.content && (
            <section
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-2 text-black">
                  {sec.title}
                </h2>
                <p className="text-black whitespace-pre-line">{sec.content}</p>
              </div>

              {sectionImages[index] ? (
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={sectionImages[index]!}
                    alt={`${project.title} ${sec.title} visual`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg cursor-zoom-in"
                    onClick={() => setZoomedImage(sectionImages[index]!)}
                  />
                </div>
              ) : (
                <div className="md:w-1/2"></div>
              )}
            </section>
          )
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <Image
            src={zoomedImage}
            alt="Zoomed image"
            width={800}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>
      )}

      {project.prototypeLinks &&
        (project.prototypeLinks.prot1 || project.prototypeLinks.prot2) && (
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Prototype
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {project.prototypeLinks.prot1 && (
                <a
                  href={project.prototypeLinks.prot1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
                >
                  Prototype 1
                </a>
              )}
              {project.prototypeLinks.prot2 && (
                <a
                  href={project.prototypeLinks.prot2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
                >
                  Prototype 2
                </a>
              )}
            </div>
          </section>
        )}

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          href="/projects"
          className="inline-block bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
