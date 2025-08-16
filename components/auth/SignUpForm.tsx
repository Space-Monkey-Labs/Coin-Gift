"use client";

import { signIn } from "next-auth/react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Gift, Mail, Wallet, Chrome, Shield, Heart } from "lucide-react"
import Link from "next/link"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleCoinbaseSignUp = async () => {
    setIsLoading(true)
    try {
      await signIn("coinbase", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) return
    
    setIsLoading(true)
    try {
      await signIn("email", { email, callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              CoinGift
            </span>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Join CoinGift
          </h1>
          <p className="text-gray-600">
            Start sending crypto gifts today
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Heart className="w-4 h-4 text-purple-600" />
              Send beautiful crypto gift cards
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Shield className="w-4 h-4 text-purple-600" />
              Bank-level security & encryption
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Wallet className="w-4 h-4 text-purple-600" />
              No wallet required for recipients
            </div>
          </div>
        </div>

        {/* Coinbase Sign Up */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleCoinbaseSignUp}
            disabled={isLoading}
            className="w-full mb-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 h-auto"
          >
            <Wallet className="w-5 h-5 mr-3" />
            Sign up with Coinbase
          </Button>
        </motion.div>

        {/* Google Sign Up */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            variant="outline"
            className="w-full mb-6 py-3 h-auto border-2"
          >
            <Chrome className="w-5 h-5 mr-3" />
            Sign up with Google
          </Button>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-6">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
            or
          </span>
        </div>

        {/* Email Sign Up */}
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              className="mt-1"
            />
            <Label 
              htmlFor="terms" 
              className="text-sm text-gray-600 leading-relaxed"
            >
              I agree to the{" "}
              <Link 
                href="/terms" 
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Terms of Service
              </Link>
              {" "}and{" "}
              <Link 
                href="/privacy" 
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Privacy Policy
              </Link>
            </Label>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isLoading || !email || !acceptTerms}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 py-3 h-auto"
            >
              <Mail className="w-5 h-5 mr-3" />
              Create Account
            </Button>
          </motion.div>
        </form>

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/signin" 
              className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Secure
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Encrypted
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              Private
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Your data is protected with industry-standard encryption
          </p>
        </div>
      </Card>
    </motion.div>
  )
}