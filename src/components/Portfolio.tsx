import { useEffect, useState } from "react";
import { skills } from "../helpers/constants";
import { getExpertiseLevel } from "../helpers/functions";
import { StickySidebar } from "./StickySidebar";

const Portfolio = () => {
  const [activeSkill, setActiveSkill] = useState("frontend");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(skills);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSkill(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-theme="dark" className="min-h-screen bg-base-100">
      <div className="flex">
        {/* Sticky Sidebar */}
        <StickySidebar
          activeItem={activeSkill}
          setActiveItem={setActiveSkill}
        />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="">
            {/* Hero Section */}
            <div className="hero min-h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-12">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold mb-6">Joe Offutt</h1>
                  <p className="text-xl mb-6">
                    Full Stack Developer & Tech Consultant
                  </p>
                  <p className="text-base-content/70 mb-8">
                    Passionate about creating exceptional digital experiences
                    through clean code and thoughtful design.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={() =>
                        window.open("https://github.com/joffutt-dev", "_blank")
                      }
                    >
                      View Projects
                    </button>
                    <button
                      className="btn btn-outline btn-lg"
                      onClick={() =>
                        (
                          document?.getElementById(
                            "downloadresume",
                          ) as HTMLDialogElement
                        )?.showModal()
                      }
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Sections */}
            {Object.entries(skills).map(([key, skill]) => (
              <section key={key} id={key} className="mb-16">
                <div className="card bg-base-200 shadow-xl">
                  <figure className="h-64 overflow-hidden">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-3xl mb-4">{skill.title}</h2>
                    <p className="text-base-content/80 text-lg mb-6">
                      {skill.description}
                    </p>

                    <div className="grid gap-6">
                      {skill.technologies.map((tech, index) => (
                        <div key={index} className="bg-base-100 p-6 rounded-lg">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-bold text-lg">{tech.name}</h3>
                            <div className="badge badge-primary badge-lg">
                              {getExpertiseLevel(tech.level)}
                            </div>
                          </div>
                          <p className="text-base-content/70 mb-4">
                            {tech.description}
                          </p>
                          <div className="w-full bg-base-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${tech.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Contact Section */}
            <section className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
              <div className="card-body text-center">
                <h2 className="card-title text-3xl justify-center mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-lg mb-6">
                  Ready to bring your ideas to life? Let&apos;s discuss your
                  next project.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-neutral btn-lg">
                    Get In Touch
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <dialog id="downloadresume" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Resume is available upon request
          </h3>
          <p className="py-4">
            Due to privacy concerns, only providing resume upon request. Please
            reach out via LinkedIn or Email
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Portfolio;
