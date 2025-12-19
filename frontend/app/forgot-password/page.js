"use client";
import React, { useState } from "react";
import { forgotPassword } from "../../utils/api";
import Link from "next/link";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
            const response = await forgotPassword(email);
            setMessage(response.message);
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white pt-16">
            <div className="w-full max-w-md p-8 space-y-6 bg-white scale-90 text-black rounded-xl shadow-xl border border-[#0a4ea3]/20">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#083b7a] mb-2">Forgot Password</h1>
                    <p className="text-gray-600">Enter your email to receive a password reset link</p>
                </div>

                {message ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-700 font-medium">{message}</p>
                        </div>
                        <div className="text-center">
                            <Link href="/auth/signin" className="text-[#0a4ea3] hover:text-[#083b7a] font-semibold transition-colors">
                                Back to Sign In
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[#083b7a] mb-2">
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

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-lg hover:from-[#083b7a]/90 hover:to-[#0a4ea3]/90 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3] focus:ring-offset-2 transition-all duration-200 shadow-lg disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Reset Link"}
                            </button>
                        </div>

                        <div className="text-center">
                            <Link href="/auth/signin" className="text-[#0a4ea3] hover:text-[#083b7a] font-semibold transition-colors">
                                Back to Sign In
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
