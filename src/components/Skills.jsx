// src/components/Skills.jsx
import React from 'react'
import { Code } from 'lucide-react'
import {
  SiTableau,
  SiJenkins,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  //SiC,
  
  SiPython,

  //SiMicrosoftExcel,
  SiMysql,
  SiMongodb,

  SiGit,
  SiGithub
} from 'react-icons/si'
import { 
  FaJava,
 } from "react-icons/fa6";
import { 
  PiMicrosoftExcelLogoLight,
 } from "react-icons/pi";


const categories = [
  {
    title: 'Programming Languages',
    skills: [
    { name: 'C', icon: <Code color="#A8B9CC" /> },

     { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
      { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', icon: <SiMysql color="#4479A1" /> },
      
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    title: 'Data & Analytics Tools',
    skills: [
     { name: 'Excel', icon: <PiMicrosoftExcelLogoLight color="#217346" /> },
 
      { name: 'Tableau', icon: <SiTableau color="#E97627" /> },
    ],
  },
  {
    title: 'Developer & DevOps Tools',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" /> },
      { name: 'GitHub', icon: <SiGithub color="#FFFFFF" /> },
      { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    ],
  },
  {
    title: 'Core Computer Science Concepts',
    skills: [
      { name: 'DSA', icon: <Code color="#FACC15" /> },
      { name: 'OOPS', icon: <Code color="#FACC15" /> },
      { name: 'DBMS', icon: <Code color="#FACC15" /> },
      { name: 'CN', icon: <Code color="#FACC15" /> },
      { name: 'OS', icon: <Code color="#FACC15" /> },
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16 px-4
        bg-gradient-to-r from-teal-500 to-blue-500
        dark:from-teal-800 dark:to-blue-800
        transition-colors text-white
      "
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="flex justify-center items-center mb-12">
        <Code className="w-8 h-8 mr-2 text-white dark:text-gray-100" />
        <h2 className="text-3xl font-bold">
          Skills &amp; <span className="text-yellow-300 dark:text-yellow-500">Abilities</span>
        </h2>
      </div>

      {/* Outer Panel */}
      <div
        className="
          max-w-[1000px] mx-auto
          bg-blue-900 dark:bg-gray-800
          rounded-2xl p-8 shadow-xl space-y-12
          transition-colors
        "
      >
        {categories.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-xl font-semibold mb-4 text-white dark:text-gray-100">
              {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="
                    bg-[#0e1525] dark:bg-[#1f2937]
                    rounded-lg p-6
                    flex flex-col items-center justify-center
                    shadow-lg transition-transform hover:scale-105
                  "
                >
                  <div className="text-[2.5rem]">
                    {React.cloneElement(icon, { size: '2.5rem' })}
                  </div>
                  <span className="mt-4 text-lg text-white dark:text-gray-200">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
