// import WordPullUp from "@/components/magicui/word-pull-up";
// import { Boxes } from "@/components/ui/background-boxes";
// import MarketplaceImage from "@/comp/hyperlocal/marketplace.png";

// function Header() {
//   return (
//     <div>
//       <div className="w-full flex flex-row h-screen">
//         <div className="w-1/2 h-screen">
//           <div className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
//             <Boxes />

//             <h1 className="text-3xl md:text-5xl font-bold mb-2">HyperLocal</h1>

//             <div className="text-lg md:text-2xl font-light text-black">
//               <WordPullUp words="A Plug In and Plug Out Franchise Model" />
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2 h-screen ">
//           <div className="h-screen justify-center items-center flex">
//             <img src={MarketplaceImage} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import WordPullUp from "@/components/magicui/word-pull-up";
import MarketplaceImage from "@/comp/hyperlocal/marketplace.png";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

function Header() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="w-full flex flex-row h-screen">
            <div className="w-1/2 h-screen">
              <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                  HyperLocal
                </h1>

                <div className="text-lg md:text-2xl font-light text-black">
                  <WordPullUp words="A Plug In and Plug Out Franchise Model" />
                </div>
                <button className=" mt-4 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-1/2 h-screen ">
              <div className="h-screen justify-center items-center flex">
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <img src={MarketplaceImage} className="rounded-2xl" />
                  <BorderBeam size={250} duration={12} delay={4} />
                  <BorderBeam size={250} duration={12} delay={8} />
                  <BorderBeam size={250} duration={12} delay={12} />
                  <BorderBeam size={250} duration={12} delay={16} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Header;
