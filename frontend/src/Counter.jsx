import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ from = 0, to }) {
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, latest => Math.floor(latest));

  useEffect(() => {
    const controls = animate(motionValue, to, { duration: 6 });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}
