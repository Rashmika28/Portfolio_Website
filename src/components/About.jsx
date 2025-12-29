// src/components/About.jsx
import React from 'react'
import { User } from 'lucide-react'
import profileImg from '../assets/picture.jpeg'

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto py-[64px] px-[32px] bg-white dark:bg-gray-900 transition-colors"
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="flex items-center justify-center mb-[40px]">
        <User className="w-[24px] h-[24px] mr-[8px] text-[#020617] dark:text-white" />
        <h2 className="text-[32px] font-bold text-[#020617] dark:text-white">
          About <span className="text-[#7E22CE] dark:text-[#D8B4FE]">Me</span>
        </h2>
      </div>

      {/* Image + Text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-[48px]">
        {/* Image */}
        <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[420px] sm:h-[480px] md:h-[500px] rounded-[24px] overflow-hidden shadow-lg">
          <img
            src={profileImg}
            alt="My Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[28px] font-bold mb-[8px] text-[#020617] dark:text-white">
            I&apos;m Rashmika
          </h3>
          <p className="text-[16px] font-semibold mb-[24px] text-[#020617] dark:text-gray-300">
            Web Developer | Data Analyst | Software Developer
          </p>

          <p className="text-[18px] leading-[1.6] mb-[32px] text-[#020617] dark:text-gray-300 text-justify">
            I am Rashmika Thattapally, an aspiring Software Engineer with a strong foundation
            in Computer Science and hands-on experience in software development through academic
            and practical projects. I am proficient in Java, Python, and web technologies, with
            a keen interest in building efficient, user-friendly applications. I have worked on
            projects such as a Grocery Price Comparison System, where I focused on problem-solving,
            database connectivity, and performance optimization. I am a quick learner, adaptable to
            new technologies, enjoy working in collaborative environments, and am motivated to
            contribute to dynamic teams while continuously learning and growing as a software
             professional.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[16px] gap-x-[40px] mb-[48px]">
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">Graduation:</span>{' '}
              <span className="text-[#020617] dark:text-gray-200">June, 2026</span>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">Email :</span>{' '}
              <a
                href="mailto:rashmikarashu28@gmail.com"
                className="text-[#0205EA] dark:text-[#63B3ED] underline"
              >
                rashmikarashu28@gmail.com
              </a>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">Phone :</span>{' '}
              <span className="text-[#0205EA] dark:text-[#63B3ED]">+91 9014065600</span>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">Place :</span>{' '}
              <span className="text-[#020617] dark:text-gray-200">Nizamabad, India</span>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="/Resume.pdf"
            download
            className="inline-block font-medium text-[18px] py-[16px] px-[32px] rounded-[8px]
              bg-[#7E22CE] dark:bg-[#5b16a2] hover:bg-[#5b16a2] dark:hover:bg-[#7E22CE]
              text-white shadow-[0_10px_20px_rgba(126,34,206,0.4)] dark:shadow-none transition-colors"
          >
            Resume &gt;
          </a>
        </div>
      </div>
    </section>
  )
}
