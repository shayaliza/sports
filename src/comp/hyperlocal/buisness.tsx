import GridPattern from "@/components/magicui/grid-pattern";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { FaSatelliteDish } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Business() {
  return (
    <div>
      <ParallaxScroll>
        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Marketings
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Operations
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Customization
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Customization
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>

        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Compliance
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
        <div className="h-80 w-full bg-gray-200 rounded-lg group">
          <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="group-hover:animate-pulse">
              <FaSatelliteDish size={100} className="" />
            </div>
            <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Compliance
            </div>
            <div className="text-lg  font-light text-black text-center mt-2">
              Tell Your Story Well to Attract more Customer
            </div>
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>
        </div>
      </ParallaxScroll>
    </div>
  );
}

export default Business;
