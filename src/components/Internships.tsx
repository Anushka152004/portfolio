import { Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const internships = [
  {
    role: "Quality Assurance Intern",
    company: "The LonelyBag",
    period: "Aug 2025 — Nov 2025",
    location: "Mumbai, India",
    description:
      "Worked as a Quality Assurance Intern, contributing to the testing and quality assurance of web and mobile applications. Executed manual test cases, identified defects, collaborated with developers to resolve issues, and gained hands-on experience with mobile automation testing using Appium.",
    highlights: [
      "Designed and executed comprehensive manual test cases to validate application functionality.",
      "Reported, tracked, and verified bugs to ensure timely resolution and improved software quality.",
      "Learned and implemented mobile automation testing concepts using Appium.",
    ],
    tech: [
      "Manual Testing",
      "Appium",
      "Postman",
      "Bug Tracking",
      "Test Case Design",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Don Bosco Institute of Technology",
    period: "Jul 2024 — Jul 2025",
    location: "Mumbai, India",
    description:
      "Contributed to the development and maintenance of the Department website by building responsive web pages, enhancing user experience, and ensuring accurate and up-to-date content. Collaborated with faculty members to improve website functionality, usability, and overall performance.",
    highlights: [
      "Developed and maintained responsive web pages using modern web technologies.",
      "Updated website content and implemented UI improvements to enhance accessibility and user experience.",
      "Applied responsive design principles to ensure compatibility across desktop, tablet, and mobile devices.",
      "Collaborated with faculty members to optimize website functionality, performance, and content management.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
      "Git",
      "GitHub",
    ],
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "AICTE – EduSkills",
    period: "Oct 2024 — Dec 2024",
    location: "Virtual",
    description:
      "Completed a 10-week virtual internship focused on Python Full Stack Development. Gained hands-on experience in front-end and back-end development, REST API integration, database management, and collaborative software development practices.",
    highlights: [
      "Developed full-stack web applications using Python and modern web technologies.",
      "Implemented front-end and back-end functionalities with REST API integration.",
      "Worked with relational databases to design and manage application data.",
      "Applied industry best practices for software development, version control, and project collaboration.",
    ],
    tech: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "REST APIs",
      "MySQL",
      "Git",
      "GitHub",
    ],
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-xs text-teal-400 mb-3">
              I've applied my skills in real-world settings
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8">
          {internships.map((intern, idx) => (
            <Reveal key={idx} animation="fade-right" delay={idx * 150}>
              <div className="card-hover bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800/50 hover:border-slate-700">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {intern.role}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mt-0.5">
                      {intern.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {intern.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {intern.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {intern.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {intern.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-teal-400 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {intern.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400 text-xs font-medium border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
