import { SKILLS } from "../constants";
import { motion } from "framer-motion";



const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  

const Servicios = () => {
  return (

    <div className="container mx-auto h-[100vh]" id="servicios">
      <h2 className="mb-1 -mt-[50px] text-center text-4xl font-semibold">Servicios</h2>
      <motion.div
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-2 flex items-center justify-between"
            variants={itemVariants}
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6  lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
              <span >{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
  );
};

export default Servicios