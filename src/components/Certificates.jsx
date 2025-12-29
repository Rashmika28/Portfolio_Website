import React from "react";

const certificates = [
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart Global Tech | Forage",
    date: "August 2025",
    points: [
      "Worked on advanced data structures",
      "Learned software architecture concepts",
      "Applied relational database design",
      "Performed data munging tasks",
    ],
  },
  {
    title: "30 Days MasterClass in Full Stack Development",
    issuer: "NoviTech R&D Private Limited",
    date: "June 2025 – July 2025",
    points: [
      "Built full-stack web applications",
      "Worked with frontend and backend technologies",
      "Improved practical development skills",
    ],
  },
  {
    title: "5 Steps AI & Machine Learning Career Plan",
    issuer: "GUVI | HCL",
    date: "July 2025",
    points: [
      "Gained insights into AI & ML career roadmap",
      "Understood industry expectations",
    ],
  },
  {
    title: "Master the Tools of Data Analytics",
    issuer: "GUVI | HCL",
    date: "July 2025",
    points: [
      "Introduction to Excel, Power BI, and Tableau",
      "Understood data analytics workflows",
    ],
  },
  {
    title: "Data Analyst Skill Certification",
    issuer: "OneRoadmap",
    date: "October 2025",
    points: [
      "Cleared data analyst skill certification test",
      "Strengthened analytical and data interpretation skills",
    ],
  },
  {
    title: "Python Skill Certification",
    issuer: "OneRoadmap",
    date: "October 2025",
    points: [
      "Demonstrated proficiency in Python programming",
      "Covered core Python concepts",
    ],
  },
  {
    title: "Python Using AI Workshop",
    issuer: "AI For Techies",
    date: "April 2025",
    points: [
      "Used AI tools to write Python code efficiently",
      "Learned debugging and visualization techniques",
    ],
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          📜 Certificates
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of certifications and learning milestones that reflect
          my continuous growth and professional development.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl p-6 shadow-md
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {cert.title}
            </h3>

            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {cert.issuer}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {cert.date}
            </p>

            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside">
              {cert.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
