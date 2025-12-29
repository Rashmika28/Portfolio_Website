// src/components/Education.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

function Education() {
  return (
    <section
      id="education"
      className="bg-gray-100 dark:bg-gray-800 py-10 px-4"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center space-x-3">
          <GraduationCap className="w-10 h-10 text-gray-800 dark:text-gray-200" />
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            My <span className="text-purple-600 dark:text-purple-400">Education</span>
          </h2>
        </div>
      </div>

      {/* Card: College */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-gray-700 rounded-2xl overflow-hidden md:flex">
         
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Bachelor of Technology <br />
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">
                (Specialization in Computer Science and Engineering)
              </span>
            </h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Kakatiya Institute of Technology and Science for Women 
              
            </p>
            <p className="mt-3 text-lg text-green-600 dark:text-green-400 font-medium">
              2022–2026 | Pursuing
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              <span className="font-semibold">Current CGPA:</span> 8.53
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
