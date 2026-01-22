import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import BirthdayPage from "@/components/BirthdayPage";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!isUnlocked ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onUnlock={handleUnlock} />
        </motion.div>
      ) : (
        <motion.div
          key="birthday"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BirthdayPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
