import Container from "./Container";
import MyWorksBox from "./MyWorksBox";

const myProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce website built with the MERN stack, featuring product search, cart, and payment integration.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your project image
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/your-username/project-repo",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio to showcase my skills and projects. Designed in Figma and built with Next.js.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your project image
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/your-username/portfolio-repo",
  },
  {
    title: "Weather App",
    description:
      "A clean and simple weather application that provides real-time weather data using a third-party API.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with your project image
    technologies: ["React", "API", "Geolocation", "CSS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/your-username/weather-repo",
  },
];

const PortfolioPage = () => {
  return (
    <Container>
      <h2 className="text-4xl font-bold text-[#eeeeee]">My Works</h2>

      {/* Responsive Grid Layout */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project, index) => (
          <MyWorksBox
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </Container>
  );
};

export default PortfolioPage;
