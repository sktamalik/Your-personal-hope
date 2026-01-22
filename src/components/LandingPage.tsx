import { motion } from "framer-motion";
import FingerprintIcon from "./FingerprintIcon";
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  onUnlock: () => void;
}

const LandingPage = ({ onUnlock }: LandingPageProps) => {
  return (
    <motion.div
      className="min-h-screen romantic-gradient flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Title */}
      <motion.h1
        className="font-romantic text-5xl md:text-7xl text-primary mb-2 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The Love Vault
      </motion.h1>
      
      <motion.p
        className="text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Hanya untuk sidik jari Qi
      </motion.p>

      {/* Fingerprint Card */}
      <motion.div
        className="bg-card/80 backdrop-blur-sm rounded-3xl px-12 py-10 shadow-xl flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <FingerprintIcon onScanComplete={onUnlock} />
        
        <motion.p
          className="text-muted-foreground text-center mt-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Letakkan jarimu di sini...
        </motion.p>

        {/* Unlock Button */}
        <motion.div
          className="mt-8 w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            onClick={onUnlock}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            BUKA KADO DIGITAL
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
