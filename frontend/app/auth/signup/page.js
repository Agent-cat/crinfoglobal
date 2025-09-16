"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../../../utils/api";
import authEvents from "../../../utils/authEvents";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const user = await signup(email, userName, password);
      authEvents.dispatch('loginSuccess', user);
      router.push("/");
      router.refresh(); // to force a refresh of the layout and re-check auth
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e6f0ff] to-white pt-16">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl border border-[#0a4ea3]/20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#083b7a] mb-2">Sign Up</h1>
          <p className="text-gray-600">Join crinfoglobal today</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <a href="/auth/signin" className="text-[#0a4ea3] hover:text-[#083b7a] font-semibold transition-colors">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
