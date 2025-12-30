import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import groceryImg from '../assets/grocery.jpg';
import portfolioImg from '../assets/portfolio.jpg';

const projects = [
  
  {
    name: 'Grocery Price Comparison System',
    image: groceryImg,
    description:
      'A web-based grocery price comparison system that allows users to compare prices of grocery items across multiple online stores, helping them find the best deals and save money.',

    github: 'https://github.com/Rashmika28/Grocery-Price-Comparison-System-',
    tags: ['Java', 'HTML', 'CSS', 'JavaScript','Servlet','JDBC'],
  },
  {
    name: 'Personal Portfolio Website',
    image: portfolioImg,
    description:
        'A responsive personal portfolio website built to showcase my skills, projects, internships, and certifications with a clean and modern user interface.',
    github: 'https://github.com/Rashmika28/Portfolio_Website',
    tags: ['HTML','CSS', 'JavaScript'],

  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center space-x-3">
          <FaFolderOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="min-w-0 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
  src={proj.image}
  alt={proj.name}
  loading="lazy"
  className="w-full max-h-60 md:max-h-72 object-contain bg-white border-b border-gray-200 dark:border-gray-700"
/>

            <div className="p-6 flex flex-col flex-grow text-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>

              <p className="text-base mb-4 flex-grow text-gray-700 dark:text-gray-300">
                {proj.description}
              </p>

              

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-auto">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center"
                  >
                    Code <FaGithub className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
