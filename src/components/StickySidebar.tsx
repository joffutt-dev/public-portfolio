import { skills } from "../helpers/constants";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

interface StickyHeaderProps {
  activeItem: string;
  setActiveItem: (key: string) => void;
}

export function StickySidebar({
  activeItem,
  setActiveItem,
}: StickyHeaderProps) {
  return (
    <div className="w-full lg:w-80 bg-base-200 lg:h-screen lg:sticky p-6 shadow-xl lg:top-0 lg:overflow-y-auto">
      <div className="lg:mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-base-content/70 text-sm mb-6">
          Explore my technical skills and experience across different domains of
          software development.
        </p>
      </div>

      <div className="w-full flex flex-wrap lg:block justify-around">
        {Object.entries(skills).map(([key, skill]) => (
          <div key={key} className="mb-2">
            <button
              onClick={() => {
                scrollToSection(key);
                setActiveItem(key);
              }}
              className={`btn btn-lg h-auto flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                activeItem === key
                  ? "bg-primary text-primary-content shadow-lg"
                  : "hover:bg-base-300"
              }`}
            >
              <div className="flex-1 text-left max-w-30 lg:max-w-80">
                <div className="font-semibold">{skill.title}</div>
                <div className="text-xs opacity-70 mt-1">
                  {skill.technologies.length} technologies
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
