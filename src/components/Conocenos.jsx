import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const Conocenos = () => {
  return (
    <div className='container mx-auto  py-16 tracking-tighter ' id='conocenos'>
        <motion.h2
        className="relative mt-20 text-center text-4xl font-semibold bg"
        intial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
       Conócenos
    </motion.h2>
    <motion.h3
        className="mt-12 -ml-1 p-4  uppercase lg:text-[2rem]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    >
        {ABOUT.text1}
    </motion.h3>
    <motion.p
    className="mt-40 text-2xl  mr-24 pl-  leading-loose"
    initial={{opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    >
        {ABOUT.text2}
    </motion.p>
    </div>
  )
}

export default Conocenos