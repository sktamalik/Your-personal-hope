import { motion } from "framer-motion";
import { useState } from "react";

interface FingerprintIconProps {
  onScanComplete?: () => void;
}

const FingerprintIcon = ({ onScanComplete }: FingerprintIconProps) => {
  const [isScanning, setIsScanning] = useState(false);

  const handlePress = () => {
    if (isScanning) return;
    setIsScanning(true);
    
    // Scan animation duration
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete?.();
    }, 2000);
  };

  return (
    <div 
      className="relative cursor-pointer select-none"
      onClick={handlePress}
    >
      {/* Main circular background */}
      <motion.div
        className="w-44 h-44 rounded-full bg-romantic-pink/60 flex items-center justify-center relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Scan line animation */}
        {isScanning && (
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-b from-transparent via-primary/60 to-transparent"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                repeat: 1,
              }}
            />
          </motion.div>
        )}

        {/* Concentric circles - fingerprint pattern */}
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32"
        >
          {/* Outer rings */}
          {[40, 34, 28, 22, 16, 10].map((radius, index) => (
            <motion.circle
              key={radius}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: isScanning ? [0.4, 1, 0.4] : 1,
              }}
              transition={{ 
                pathLength: { delay: index * 0.1, duration: 0.5 },
                opacity: isScanning ? { duration: 0.5, repeat: Infinity } : { duration: 0.3 }
              }}
            />
          ))}
          
          {/* Center dot */}
          <motion.circle
            cx="50"
            cy="50"
            r="4"
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              opacity: isScanning ? [0.5, 1, 0.5] : 1 
            }}
            transition={{ 
              scale: { delay: 0.6, duration: 0.3 },
              opacity: isScanning ? { duration: 0.5, repeat: Infinity } : {}
            }}
          />
        </svg>

        {/* Glow effect when scanning */}
        {isScanning && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ boxShadow: "0 0 0 0 hsl(var(--primary) / 0.3)" }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 hsl(var(--primary) / 0.4)",
                "0 0 20px 10px hsl(var(--primary) / 0.2)",
                "0 0 0 0 hsl(var(--primary) / 0.4)",
              ]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Floating heart */}
      <motion.div
        className="absolute -top-1 right-4"
        animate={{ 
          y: [0, -5, 0],
          scale: isScanning ? [1, 1.2, 1] : 1
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          scale: isScanning ? { duration: 0.5, repeat: Infinity } : {}
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 text-primary"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>

      {/* Scanning text */}
      {isScanning && (
        <motion.p
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-primary text-sm font-medium whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Memverifikasi...
        </motion.p>
      )}
    </div>
  );
};

export default FingerprintIcon;
