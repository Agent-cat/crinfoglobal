"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signup, verifyOTP, resendOTP } from "../../../utils/api";
import authEvents from "../../../utils/authEvents";
import Link from "next/link";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await signup(email, userName, password);
      setSuccess(response.message);
      setShowOTPForm(true);
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError(null);
    setIsVerifying(true);
    try {
      const response = await verifyOTP(email, otp);
      authEvents.dispatch('loginSuccess', response.data);
      router.push("/");
      router.refresh();
    } catch (error) {
      setError(error.response?.data?.message || "OTP verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    setError(null);
    setIsResending(true);
    try {
      await resendOTP(email);
      setSuccess("OTP sent successfully. Please check your email.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setIsResending(false);
    }
  };

  if (showOTPForm) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white pt-16">
        <div className="w-full scale-90 text-black max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl border border-[#0a4ea3]/20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#083b7a] mb-2">Verify Email</h1>
            <p className="text-gray-600">Enter the verification code sent to {email}</p>
          </div>
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-semibold text-[#083b7a] mb-2"
              >
                Verification Code
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors text-center text-lg tracking-widest"
                placeholder="Enter 6-digit code"
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-600">{success}</p>
              </div>
            )}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-lg hover:from-[#083b7a]/90 hover:to-[#0a4ea3]/90 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3] focus:ring-offset-2 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Verify Email"}
              </button>
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isResending}
                className="w-full px-4 py-2 text-sm font-medium text-[#0a4ea3] border border-[#0a4ea3] rounded-lg hover:bg-[#0a4ea3] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0a4ea3] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
              >
                {isResending ? "Sending..." : "Resend Code"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white pt-16">
      <div className="w-full scale-90 text-black max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl border border-[#0a4ea3]/20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#083b7a] mb-2">Sign Up</h1>
          <p className="text-gray-600">Join crinfoglobal today</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-semibold text-[#083b7a] mb-2"
            >
              Username
            </label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors"
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#083b7a] mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#083b7a] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors"
              placeholder="Create a password"
            />
          </div>
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-lg hover:from-[#083b7a]/90 hover:to-[#0a4ea3]/90 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3] focus:ring-offset-2 transition-all duration-200 shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-[#0a4ea3] hover:text-[#083b7a] font-semibold transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

