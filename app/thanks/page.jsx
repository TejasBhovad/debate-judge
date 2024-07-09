"use client";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-40">
      <motion.span
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h1 className="text-4xl font-bold">Thanks for your feedback!</h1>
        <p className="w-full text-center text-lg">You can now close this tab</p>
      </motion.span>
    </div>
  );
};

export default page;
