"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Send, Shield, Zap, Heart, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Easy to Send",
    description: "Create and send crypto gift cards in minutes. No technical knowledge required.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "No Wallet Required",
    description: "Recipients don't need a crypto wallet to receive gifts. We handle the complexity.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Secure & Instant",
    description: "Bank-level security with instant delivery. Your gifts are protected and delivered fast.",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Heart,
    title: "Delightful Experience",
    description: "Beautiful, personalized gift cards that make receiving crypto feel magical.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Send crypto gifts anywhere in the world. No borders, no barriers.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Perfect experience on any device. Create, send, and redeem on the go.",
    gradient: "from-teal-500 to-blue-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CoinGift?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve reimagined gift giving for the crypto age. Simple, secure, and delightful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Coinbase</div>
            <div className="text-2xl font-bold text-gray-400">MetaMask</div>
            <div className="text-2xl font-bold text-gray-400">Rainbow</div>
            <div className="text-2xl font-bold text-gray-400">WalletConnect</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}