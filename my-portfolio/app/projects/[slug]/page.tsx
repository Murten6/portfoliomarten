import projects from "../../data/projects.json";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
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
    kids?: string;
    teachers?: string;
  };
}

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectSlugPage({ params }: SlugPageProps) {
  const project: Project | undefined = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) return <p>Project not found</p>;

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

  // Map van secties naar bijbehorende images
  const sectionImages: (string | undefined)[] = [
    project.image,
    project.image2,
    project.image3,
    project.image4,
    project.image5,
    project.image6,
  ];

  return (
    <div
      className="w-screen min-h-screen px-6 md:px-20 py-10"
      style={{ backgroundColor: project.background || "#f5f5f5" }}
    >
      {/* Titel en rol */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-4">{project.title}</h1>
        {project.role && (
          <p className="text-xl font-semibold text-black">{project.role}</p>
        )}
        {project.description && (
          <p className="mt-4 text-black max-w-3xl mx-auto">
            {project.description}
          </p>
        )}
      </div>

      {/* Dynamische secties met tekst + bijbehorende afbeelding */}
      {sections.map(
        (sec, index) =>
          sec.content && (
            <section
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Tekstblok */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-2 text-black">
                  {sec.title}
                </h2>
                <p className="text-black whitespace-pre-line">{sec.content}</p>
              </div>

              {/* Afbeelding voor de sectie of lege ruimte */}
              {sectionImages[index] ? (
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={sectionImages[index]!}
                    alt={`${project.title} ${sec.title} visual`}
                    width={400}
                    height={250}
                    className="rounded-md object-contain"
                  />
                </div>
              ) : (
                <div className="md:w-1/2"></div> // Leeg blok voor uitlijning
              )}
            </section>
          )
      )}

      {/* Prototype links alleen tonen als aanwezig */}
      {project.prototypeLinks &&
        (project.prototypeLinks.kids || project.prototypeLinks.teachers) && (
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Prototype
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {project.prototypeLinks.kids && (
                <a
                  href={project.prototypeLinks.kids}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
                >
                  Kids Portal
                </a>
              )}
              {project.prototypeLinks.teachers && (
                <a
                  href={project.prototypeLinks.teachers}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
                >
                  Teacher Portal
                </a>
              )}
            </div>
          </section>
        )}

      {/* Back button altijd zichtbaar */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          href="/projects"
          className="inline-block bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-6 py-3 text-center"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
