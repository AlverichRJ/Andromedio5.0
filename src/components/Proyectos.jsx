import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";



const containerVariants ={
        hidden: { opacity: 0, y: -20 },
              visible: {
                         opacity: 1,
                               y: 0,
                        transition: {
                                         duration: 0.5,
                                         staggerChildren: 0.4,
    },
  },
};

const itemVariants={

    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },

};

const Proyectos = () => {
  return (
    <div id="proyectos">
        <motion.h2
        className=" text-center text-4xl font-semibold h-[50vh]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >

        Proyectos

       </motion.h2>
       <motion.div
        className="flex relative h-[70vh] "
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link="#"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Proyectos