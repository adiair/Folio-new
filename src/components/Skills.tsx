import React from "react";

const skills = [
    { name: "Java" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Azure Cloud" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Figma" },
    { name: "ThreeJS" },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-md">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="text-xs flex bg-gray-800/50 items-start gap-1.5  px-3 py-1 font-mono"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
