import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MemoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const MemoryCard = ({ icon: Icon, title, description, delay = 0 }: MemoryCardProps) => {
  return (
    <motion.div
      className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-romantic-pink/50 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-romantic text-2xl text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default MemoryCard;
