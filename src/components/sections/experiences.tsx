"use client";

import { useState } from "react";
import { EXPERIENCES } from "@/lib/data";
import ExperienceDetails from "@/components/data-display/experience-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 3);

  return (
    <Container className="bg-gray-50" id="experiences">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experiencia" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Breve resumen de mis experiencias laborales más recientes:
        </Typography>
      </div>

      {visibleExperiences.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}

      {EXPERIENCES.length > 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-md border border-gray-300 px-6 py-2 text-lg transition hover:bg-gray-100"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </Container>
  );
};

export default ExperienceSection;
