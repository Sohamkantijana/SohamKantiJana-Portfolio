import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

// Updated knowledge data
export const serviceData = [
  {
    title: "Laravel Development",
    description:
      "Building secure and scalable backend applications using Laravel framework with MVC architecture and REST APIs.",
  },
  {
    title: "XAMPP Environment Setup",
    description:
      "Configuring and managing local development environments using Apache, MySQL, and PHP with XAMPP.",
  },
  {
    title: "Full Stack Development",
    description:
      "Developing complete web applications including frontend, backend, database integration, and deployment.",
  },
  {
    title: "REST API Integration",
    description:
      "Designing and consuming RESTful APIs for seamless communication between frontend and backend systems.",
  },
  {
    title: "Database Management",
    description:
      "Working with MySQL databases, migrations, relationships, and performance optimization.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Knowledge <span className="text-accent">Hub.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Important development concepts and technologies I use in
              real-world projects including Laravel, backend systems, APIs, and
              full stack architecture.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
