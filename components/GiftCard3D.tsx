"use client";

import { motion } from "framer-motion";
import { Coins, Hexagon, DollarSign } from "lucide-react";

interface GiftCard3DProps {
  theme?: "birthday" | "holiday" | "graduation" | "default";
  amount?: number;
  crypto?: "BTC" | "ETH" | "USDC";
  message?: string;
  animate?: boolean;
  className?: string;
}

export function GiftCard3D({
  theme = "default",
  amount = 100,
  crypto = "BTC",
  message = "Happy Birthday!",
  animate = true,
  className = "",
}: GiftCard3DProps) {
  const getCryptoIcon = () => {
    switch (crypto) {
      case "BTC":
        return <Coins className="w-8 h-8 text-[#F7931A]" />;
      case "ETH":
        return <Hexagon className="w-8 h-8 text-[#627EEA]" />;
      case "USDC":
        return (
          <DollarSign className="w-8 h-8 text-[#2775CA]" />
        );
      default:
        return <Coins className="w-8 h-8 text-[#F7931A]" />;
    }
  };

  const getThemeGradient = () => {
    switch (theme) {
      case "birthday":
        return "from-pink-400 via-purple-500 to-indigo-600";
      case "holiday":
        return "from-red-400 via-green-500 to-emerald-600";
      case "graduation":
        return "from-blue-400 via-purple-500 to-violet-600";
      default:
        return "from-purple-400 via-violet-500 to-indigo-600";
    }
  };

  const getThemeAccent = () => {
    switch (theme) {
      case "birthday":
        return "🎂";
      case "holiday":
        return "🎁";
      case "graduation":
        return "🎓";
      default:
        return "💝";
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={animate ? { rotateY: 0, scale: 0.8 } : undefined}
      animate={
        animate
          ? {
              rotateY: [0, 15, -15, 0],
              scale: [0.8, 1, 1, 1],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }
          : undefined
      }
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
    >
      {/* Card Shadow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-2xl blur-xl opacity-60" />

      {/* Main Card */}
      <div
        className={`relative w-80 h-48 rounded-2xl bg-gradient-to-br ${getThemeGradient()} p-6 text-white shadow-2xl overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />

        {/* Floating Crypto Icons */}
        <div className="absolute top-4 right-4 opacity-20">
          <motion.div
            animate={
              animate
                ? {
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }
                : undefined
            }
            transition={
              animate
                ? {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : undefined
            }
          >
            {getCryptoIcon()}
          </motion.div>
        </div>

        {/* Theme Emoji */}
        <div className="absolute top-4 left-4 text-2xl">
          {getThemeAccent()}
        </div>

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {getCryptoIcon()}
              <span className="text-sm font-medium opacity-90">
                CoinGift
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1">
              {message}
            </h3>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold mb-1">
              ${amount}
            </div>
            <div className="text-sm opacity-80">
              Worth of {crypto}
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={animate ? { x: "100%" } : undefined}
          transition={
            animate
              ? {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      </div>
    </motion.div>
  );
}