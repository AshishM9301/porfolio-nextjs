import Link from "next/link"
import Image from "next/image"
import { Mail, FileText, Linkedin, Instagram, ExternalLink } from "lucide-react"
import { Caveat } from "next/font/google"
import SectionHeading from "@/components/section-heading"

interface ExperienceCardProps {
  jobTitle: string
  company: string
  location: string
  startDate: string
  endDate: string
  achievements: string[]
}

export default function ExperienceCard({
  jobTitle,
  company,
  location,
  startDate,
  endDate,
  achievements,
}: ExperienceCardProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-black dark:text-white text-xl">{jobTitle}</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {startDate} - {endDate}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium text-black dark:text-white">{company}</p>
          <p className="text-gray-700 dark:text-gray-300">{location}</p>
        </div>
      </div>

      <ul className="list-decimal pl-5 space-y-2 text-gray-800 dark:text-gray-200 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>

      <hr className="border-gray-200 dark:border-gray-700" />
    </div>
  )
}

// Caveat is one of the closest Google Fonts to Figma Hand
const handwrittenFont = Caveat({ subsets: ["latin"], weight: ["700"] })

export function Home() {
  // Experience data
  const experiences = [
    {
      jobTitle: "Application Programmer",
      company: "Web Spiders (India) Pvt. Ltd",
      location: "Kolkata",
      startDate: "March 2024",
      endDate: "Present",
      achievements: [
        "Improved performance and functioning by migrating React Native app from Expo to CLI, increasing user satisfaction by 20%.",
        "Optimized performance in Flutter applications, achieving faster load times and fluid transitions.",
        "Engineered a CRM application using Next JS to enhance user experience and optimize performance",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "OKAB",
      location: "Location",
      startDate: "Jun 2020",
      endDate: "Apr 2022",
      achievements: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript",
        "Implemented design systems and component libraries to ensure consistency",
        "Worked closely with designers to translate mockups into functional interfaces",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "OKAB",
      location: "Location",
      startDate: "Jun 2020",
      endDate: "Apr 2022",
      achievements: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript",
        "Implemented design systems and component libraries to ensure consistency",
        "Worked closely with designers to translate mockups into functional interfaces",
      ],
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white text-black">
      <header className="mb-12 text-center">
        <h1 className={`text-4xl mb-3 ${handwrittenFont.className} text-black font-bold`}>Ashish Kumar Mahto</h1>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mb-6">
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-black" />
          </Link>
          <Link href="#" aria-label="Twitter/X">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </Link>
          <Link href="#" aria-label="Email">
            <Mail className="w-5 h-5 text-black" />
          </Link>
          <Link href="#" aria-label="Resume">
            <FileText className="w-5 h-5 text-black" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-black" />
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav className="border border-gray-200 rounded-md w-full bg-gray-50 shadow-md">
          <div className="flex justify-between items-center px-6 py-2">
            <Link href="#" className="font-bold text-black">
              Home
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Experience
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Projects
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Skills
            </Link>
            <Link href="#" className="text-black hover:font-bold">
              Blogs
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-md text-black hover:bg-gray-300"
            >
              Resume
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Professional Summary */}
      <div className="mb-10 text-lg text-gray-800 leading-relaxed">
        <p>
          Application Developer who turns ideas into seamless apps. Master of React, React Native, Flutter, and a
          back-end architect with Node.js, Express, MongoDB, and PostgreSQL. Agile, efficient, and all about crafting
          impactful experiences
        </p>
      </div>

      <section className="mb-10">
        <SectionHeading title="Experience" />

        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            jobTitle={exp.jobTitle}
            company={exp.company}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            achievements={exp.achievements}
          />
        ))}
      </section>

      <section className="mb-10">
        <SectionHeading title="Projects" />

        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=500"
              alt="Project screenshot"
              width={500}
              height={200}
              className="w-full border border-gray-200"
            />
          </div>
          <h3 className="font-medium mb-1 text-black">Project Title</h3>
          <p className="text-sm text-gray-700 mb-2">
            A comprehensive description of the project, including technologies used and challenges overcome. This
            project demonstrates skills in frontend development, API integration, and responsive design.
          </p>
          <div className="flex space-x-2">
            <Link href="#" className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-black">
              View Demo
            </Link>
            <Link href="#" className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-black">
              Source Code
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=500"
              alt="Project screenshot"
              width={500}
              height={200}
              className="w-full border border-gray-200"
            />
          </div>
          <h3 className="font-medium mb-1 text-black">Another Project</h3>
          <p className="text-sm text-gray-700 mb-2">
            Description of another significant project showcasing different skills and technologies. This project
            highlights expertise in backend development, database design, and system architecture.
          </p>
          <div className="flex space-x-2">
            <Link href="#" className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-black">
              View Demo
            </Link>
            <Link href="#" className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-black">
              Source Code
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="Skills" />
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">HTML</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">CSS</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">JavaScript</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">React</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">Node.js</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">MongoDB</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">Git</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">TypeScript</div>
          <div className="text-sm py-1 px-2 bg-gray-100 text-center text-black">Next.js</div>
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="Blogs" />
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-black">How to Build a Responsive Website with Next.js</h3>
            <span className="text-sm text-gray-600">June 15, 2023</span>
          </div>
          <p className="text-sm text-gray-700">
            A comprehensive guide to building responsive websites using Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-black">Understanding React Hooks</h3>
            <span className="text-sm text-gray-600">April 22, 2023</span>
          </div>
          <p className="text-sm text-gray-700">
            An in-depth look at React Hooks and how they can simplify your React components.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="Education" />
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium text-black">Bachelor of Technology in Computer Science</h3>
            <span className="text-sm text-gray-600">2016 - 2020</span>
          </div>
          <p className="text-sm text-gray-700">University Name, Location</p>
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="Contact" />
        <div className="flex flex-wrap gap-4 mb-4">
          <Link href="mailto:email@example.com" className="flex items-center gap-1 text-sm hover:underline text-black">
            <Mail className="w-4 h-4" />
            <span>email@example.com</span>
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm hover:underline text-black">
            <Linkedin className="w-4 h-4" />
            <span>linkedin</span>
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm hover:underline text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
            <span>twitter</span>
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm hover:underline text-black">
            <Instagram className="w-4 h-4" />
            <span>instagram</span>
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        <p>© {new Date().getFullYear()} Ashish Kumar Mahto. All rights reserved.</p>
      </footer>
    </div>
  )
}

