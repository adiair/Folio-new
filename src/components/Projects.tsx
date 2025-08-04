import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

const projects = [
  {
    title: "Palette ",
    icon: "/echoforms.png",
    description:
      "Palette is an AI-powered SaaS for effortless form creation via prompts. It offers real-time analytics, email notifications, and seamless data export, making form management efficient and user-friendly.",
    technologies: [
      "Next.js, ",
      "Tailwind CSS, ",
      "javaScript",
    ],
    liveLink: "https://palette2.netlify.app/",
    github: "",
  },
  {
    title: "PrepVista ",
    icon: "/ReportNow.png",
    description:
      "PrepVista is a secure platform for anonymous incident reporting, leveraging AI and real-time location tracking to enhance accuracy and efficiency.",
    technologies: [
      "Next.js, ",
      "Tailwind CSS, ",
      "React Hook Form, ",
      "Zod, ",
      "NextAuth, ",
      "Prisma ORM, ",
      "PostgreSQL, ",
      "NeonDB, ",
      "Gemini AI, ",
      "Here API, ",
      "Cloudinary, ",
      "Resend, ",
      "Docker",
    ],
    liveLink: "https://reportnow.vercel.app/",
    github: "https://github.com/10xshivam/ReportNow",
  },
  {
    title: "Talker ",
    icon: "/talker.png",
    description:
      "Talker is a real-time chat application built with a Node.js backend and a React frontend. It supports user authentication, profile management, and real-time messaging using Socket.IO. ",
    technologies: [
      "React.js, ",
      "Tailwind CSS, ",
      "Daisy UI, ",
      "MongoDB, ",
      "Express.js, ",
      "JWT, ",
      "Zustand, ",
      "Socket.io ",
    ],
    liveLink: "https://talker-gqxd.onrender.com/",
    github: "https://github.com/10xshivam/Talker",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-md">Things I've Built</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full border-dashed border-gray-800 border-2 p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="p-1 border border-gray-800 rounded">
                  <Image
                    alt={project.title}
                    src={project.icon}
                    width={15}
                    height={15}
                  />
                </div>
                <span className="font-mono font-semibold text-gray-300 tracking-tight">
                  {project.title}
                </span>
              </div>
              <div className="flex gap-2 font-mono tracking-tighter text-sm">
                <Link href={project.liveLink} target="_blank">
                  <GoDotFill className="text-green-600 inline" />
                  Live
                </Link>
                |
                <Link href={project.github} target="_blank">
                  GitHub
                </Link>
              </div>
            </div>
            <p className="text-xs font-semibold font-mono text-gray-300">
              Tech Stack -{" "}
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="font italic text-gray-400 tracking-tighter font-medium"
                >
                  {technology}
                </span>
              ))}
            </p>
            <hr className="border-gray-700" />
            <p className="text-sm text-gray-500  tracking-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
