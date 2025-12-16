"use client";

import { useState } from "react";
import { projects } from "@/lib/const";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        {projects.map((project, index) => (
          <div key={project.title} className="flex items-center">
            <button
              onClick={() => setSelectedIndex(index)}
              className={`transition-colors ${
                selectedIndex === index
                  ? "text-foreground underline"
                  : "text-dark hover:text-mid"
              }`}
            >
              {project.title}
            </button>
            {index < projects.length - 1 && (
              <span className="text-dark ml-2">-</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-mid">
        {projects[selectedIndex].description}
      </p>
    </div>
  );
}
