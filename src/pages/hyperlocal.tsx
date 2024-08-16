import { motion } from "framer-motion";
import { BentoDemo } from "@/comp/hyperlocal/bentoGrid";
import Buisness from "@/comp/hyperlocal/buisness";
import First from "@/comp/hyperlocal/first";
import Header from "@/comp/hyperlocal/header";
import Subscription from "@/comp/hyperlocal/susbscription";
import AccordionDemo from "@/comp/hyperlocal/faq";

function Hyperlocal() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pb-32">
      <Header />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl mt-4 md:text-4xl font-semibold text-center mb-4 text-gray-800">
              Why Digistall Franchise Program?
            </h3>
          </div>
        </div>
      </motion.section>

      <First />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl mt-4 md:text-4xl font-semibold text-center mb-4 text-gray-800">
              How does the program work ?
            </h3>
          </div>
        </div>
      </motion.section>

      <BentoDemo />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4 pt-7 text-gray-800">
              Things we would take care of for your business
            </h3>
          </div>
        </div>
      </motion.section>

      <Buisness />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4 text-gray-800">
              Your Benefits
            </h3>
          </div>
        </div>
      </motion.section>

      <Buisness />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4 text-gray-800">
              Our Subscription Plan
            </h3>
          </div>
        </div>
      </motion.section>

      <div className="flex flex-row justify-center gap-9">
        <Subscription />
        <Subscription />
      </div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-900 mt-6 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-4 text-gray-800">
              Our Subscription Plan
            </h3>
          </div>
        </div>
      </motion.section>
      <AccordionDemo />
    </div>
  );
}

export default Hyperlocal;
