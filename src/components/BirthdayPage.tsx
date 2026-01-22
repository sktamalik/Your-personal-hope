import { motion } from "framer-motion";
import { Camera, MessageCircle, Calendar } from "lucide-react";
import MemoryCard from "./MemoryCard";
import WishForm from "./WishForm";

const BirthdayPage = () => {
  return (
    <motion.div
      className="min-h-screen romantic-gradient py-12 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl">🎂</span>
          </motion.div>
          <h1 className="font-romantic text-5xl md:text-7xl text-primary mt-4">
            Happy Birthday, Sayang!
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Terima kasih sudah ada di dunia ini dan bersamaku.
          </p>
        </motion.header>

        {/* Memory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MemoryCard
            icon={Camera}
            title="Kenangan Pertama"
            description="Momen di mana semuanya dimulai. Masih ingat tempatnya?"
            delay={0.3}
          />
          <MemoryCard
            icon={MessageCircle}
            title="Tawa Bersama"
            description="Ribuan chat, ratusan telepon, dan sejuta tawa yang kita bagi."
            delay={0.5}
          />
          <MemoryCard
            icon={Calendar}
            title="Hari Ini & Nanti"
            description="Satu tahun lagi kita lewati, dan aku masih memilihmu."
            delay={0.7}
          />
        </div>

        {/* Wish Form */}
        <WishForm />

        {/* Footer */}
        <motion.footer
          className="text-center mt-16 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-primary font-romantic text-2xl">
            Dengan cinta, selalu untukmu 💕
          </p>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default BirthdayPage;
