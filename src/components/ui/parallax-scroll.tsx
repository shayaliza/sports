"use client";
import React, { useRef, ReactNode } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const childrenArray = React.Children.toArray(children);
  const third = Math.ceil(childrenArray.length / 3);

  const firstPart = childrenArray.slice(0, third);
  const secondPart = childrenArray.slice(third, 2 * third);
  const thirdPart = childrenArray.slice(2 * third);

  return (
    <div className={cn("w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full gap-10 py-40 px-10 relative">
        <div className="grid gap-10">
          {firstPart.map((child, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="relative"
            >
              {child}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((child, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="relative -top-20"
            >
              {child}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((child, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="relative"
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
