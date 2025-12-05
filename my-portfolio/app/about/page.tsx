import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

// Data voor About-sectie en Contact
const aboutBlock = {
  title: "Over mij",
  description:
    "Hoi, ik ben Marten Fleuren, derdejaars student Open ICT aan de Hogeschool Utrecht met een passie voor UX/UI-design. Ik ontwerp gebruiksvriendelijke en toegankelijke digitale producten, van interactieve prototypes tot usability-tests. Tijdens mijn studie en projecten heb ik ervaring opgedaan met Figma en het ontwerpen voor verschillende doelgroepen. Ik combineer design, techniek en analyse om producten te maken die zowel functioneel als aantrekkelijk zijn.",
  role: "3e Jaars student HU Open-ICT",
  image: "/images/about1.jpg",
  background: "#16A34A",
};

export default function AboutPage() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Over mij sectie */}
      <section
        className="w-screen h-screen snap-start flex items-center justify-center relative"
        style={{ backgroundColor: aboutBlock.background }}
      >
        <NavBar className="absolute top-6 right-6" />

        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full h-full max-w-7xl
            gap-0 md:gap-4
            px-3 md:px-20
          "
        >
          {/* Afbeelding links */}
          <div
            className="
              relative 
              w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]
              rounded-full
              overflow-hidden
              flex justify-center items-center
              p-2 md:p-4
            "
          >
            <Image
              src={aboutBlock.image}
              alt={aboutBlock.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tekstblok rechts */}
          <div className="flex flex-col justify-center w-full md:w-[600px] lg:w-[700px] text-white p-4 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              {aboutBlock.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-2 md:mb-4 leading-relaxed">
              {aboutBlock.description}
            </p>

            <p className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
              {aboutBlock.role}
            </p>
          </div>
        </div>
      </section>

      {/* Contact sectie */}
      <section className="w-screen h-screen snap-start flex flex-col items-center justify-center px-6 md:px-20 bg-green-500">
        <h2 className="text-5xl font-bold text-white mb-6">Contact</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Mail Button */}
          <a
            href="mailto:martenfleuren@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300"
          >
            <FaEnvelope />
            Mail mij
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/marten-fleuren-72767a313/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
