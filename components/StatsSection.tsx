"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Total Value Gifted",
    description: "Crypto gifts sent through our platform"
  },
  {
    icon: Users,
    value: "100K+",
    label: "Happy Users",
    description: "People spreading crypto joy worldwide"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service you can count on"
  },
  {
    icon: Award,
    value: "50+",
    label: "Cryptocurrencies",
    description: "Supported digital assets"
  }
];

const securityFeatures = [
  "Bank-level encryption",
  "Multi-signature wallets", 
  "Cold storage security",
  "Regular security audits",
  "GDPR compliant",
  "24/7 monitoring"
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join the growing community spreading crypto joy around the world
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300 group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-purple-200 text-sm">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Enterprise-Grade Security
              </h3>
              <p className="text-purple-200">
                Your crypto gifts are protected by the same security standards used by major financial institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}