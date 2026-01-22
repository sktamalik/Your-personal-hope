import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send } from "lucide-react";

const WishForm = () => {
  const [wish, setWish] = useState("");
  const [savedWishes, setSavedWishes] = useState<string[]>(() => {
    const saved = localStorage.getItem("love-vault-wishes");
    return saved ? JSON.parse(saved) : [];
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!wish.trim()) {
      toast({
        title: "Oops!",
        description: "Tulis harapanmu dulu ya sayang 💕",
        variant: "destructive",
      });
      return;
    }

    const newWishes = [...savedWishes, wish];
    setSavedWishes(newWishes);
    localStorage.setItem("love-vault-wishes", JSON.stringify(newWishes));
    
    toast({
      title: "Harapan Tersimpan! 💝",
      description: "Harapanmu sudah aku simpan di brankas rahasia kita.",
    });
    
    setWish("");
  };

  return (
    <motion.section
      className="mt-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <h2 className="font-romantic text-4xl md:text-5xl text-primary mb-2">
        Harapan untuk Kita
      </h2>
      <p className="text-muted-foreground mb-6">
        Tuliskan satu keinginanmu tahun ini, aku akan menyimpannya di brankas rahasia ini
      </p>
      
      <div className="relative">
        <Textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Tulis harapanmu di sini..."
          className="min-h-[150px] bg-card/70 backdrop-blur-sm border-primary/30 focus:border-primary rounded-2xl p-4 text-foreground resize-none"
        />
        
        <motion.div
          className="mt-4 flex justify-end"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-md flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Simpan Harapan
          </Button>
        </motion.div>
      </div>

      {/* Saved Wishes Display */}
      {savedWishes.length > 0 && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-romantic text-2xl text-primary mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" fill="currentColor" />
            Harapan yang Tersimpan
          </h3>
          <div className="space-y-3">
            {savedWishes.map((savedWish, index) => (
              <motion.div
                key={index}
                className="bg-romantic-pink/30 rounded-xl p-4 border border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-foreground">{savedWish}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default WishForm;
