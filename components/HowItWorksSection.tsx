"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { GiftCard3D } from "./GiftCard3D";
import { CreditCard, Palette, Send, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Amount",
    description: "Select the crypto amount and currency you want to gift",
    icon: CreditCard,
    color: "from-purple-500 to-violet-500"
  },
  {
    number: "02", 
    title: "Design Your Card",
    description: "Pick a beautiful theme and add a personal message",
    icon: Palette,
    color: "from-teal-500 to-cyan-500"
  },
  {
    number: "03",
    title: "Send & Share",
    description: "Send via email, link, or schedule for later delivery",
    icon: Send,
    color: "from-pink-500 to-rose-500"
  },
  {
    number: "04",
    title: "They Receive Joy",
    description: "Recipient gets a magical gift card experience",
    icon: Gift,
    color: "from-orange-500 to-amber-500"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sending crypto gifts has never been easier. Follow these simple steps to spread joy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-200 to-transparent" />
                )}
                
                <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                    >
                      {step.number}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-5 h-5 text-gray-600" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-violet-200 rounded-3xl blur-3xl opacity-30" />
            
            <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  See It In Action
                </h3>
                <p className="text-gray-600">
                  Watch how easy it is to create a gift card
                </p>
              </div>

              {/* Mock Interface */}
              <div className="space-y-6">
                {/* Step 1: Amount Selection */}
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">Choose Amount</div>
                  <div className="flex gap-2">
                    <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">$25</div>
                    <div className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">$100</div>
                    <div className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">$250</div>
                  </div>
                </div>

                {/* Step 2: Gift Card Preview */}
                <div className="flex justify-center">
                  <GiftCard3D 
                    theme="default" 
                    amount={100} 
                    crypto="ETH" 
                    message="Congratulations!" 
                    animate={false}
                    className="scale-75"
                  />
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                  Try It Yourself
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}