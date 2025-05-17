import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "PWOC",
    description:
      "A platform where people can contribute to open source projects with over 200+ active users.",
    technologies: ["Next.js", "Redis", "Octokit", "Tailwind CSS", "Node.js", "Express"],
    codeLink: "https://github.com/itsbhavik1/PWoC",
    image: "/pwoc.png",
    date: "",
    website: "http://pwoc.vercel.app/",
  },
  {
    title: "Booksy",
    description:
      "A platform where people can discuss books using chatroom and also purchase them.",
    technologies: ["Stripe", "Socket.IO", "MongoDB"],
    codeLink: "https://github.com/itsbhavik1/IdeathonProject",
    image: "/booksy.jpg",
    date: "",
    website: "",
  },
  {
    title: "Periodic Table Visualiser",
    description:
      "A resource made for learning and visualising the periodic table and interact with it ",
    technologies: ["Stripe", "Socket.IO", "MongoDB"],
    codeLink: "https://github.com/itsbhavik1/atom-explorer-universe-guide",
    image: "/image.png",
    date: "",
    website: "https://atom-explorer-universe-guide.vercel.app/",
  },
  {
    title: "Twitter Trading Blockchain Bot",
    description:
      "A Twitter trading bot based on Aptos blockchain that uses Gemini to analyze sentiments and place trades to maximize value on an Aptos wallet.",
    technologies: ["React", "Aptos", "Gemini", "Tailwind CSS"],
    codeLink: "https://devfolio.co/projects/bugslayers-e4ca",
    image: "/twitterproject.jpeg",
    date: "",
    website: "",
  },
];

const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
