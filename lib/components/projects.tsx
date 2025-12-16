"use client";

import { useState } from "react";
import { projects } from "@/lib/const";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-wrap justify-center gap-x-1">
        {projects.map((project, index) => (
          <div key={project.title} className="flex items-center gap-1">
            <button
              onClick={() => setSelectedIndex(index)}
              className={`transition-colors font-medium ${
                selectedIndex === index
                  ? "text-foreground underline underline-offset-1"
                  : "text-dark hover:text-mid"
              }`}
            >
              {project.title}
            </button>
            {index < projects.length - 1 && (
              <span className="text-dark">-</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-balance text-light font-medium h-16">
        {projects[selectedIndex].description}
      </p>
    </div>
  );
}
