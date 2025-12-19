"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "../../utils/api";
import Link from "next/link";

const ResetPasswordContent = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) {
            setError("Invalid or missing reset token.");
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setLoading(true);
        try {
            const response = await resetPassword(token, password);
            setMessage(response.message);
            setTimeout(() => {
                router.push("/auth/signin");
            }, 3000);
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
                    <h1 className="text-3xl font-bold text-[#083b7a] mb-2">Reset Password</h1>
                    <p className="text-gray-600">Enter your new password below</p>
                </div>

                {message ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-700 font-medium">{message}</p>
                            <p className="text-xs text-green-600 mt-2">Redirecting to sign in page...</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" name="new-password" id="new-password-label" className="block text-sm font-semibold text-[#083b7a] mb-2">
                                New Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={!token}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors disabled:bg-gray-100"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" name="confirm-password" id="confirm-password-label" className="block text-sm font-semibold text-[#083b7a] mb-2">
                                Confirm New Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                disabled={!token}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0a4ea3] focus:border-[#0a4ea3] transition-colors disabled:bg-gray-100"
                                placeholder="Confirm new password"
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
                                disabled={loading || !token}
                                className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-lg hover:from-[#083b7a]/90 hover:to-[#0a4ea3]/90 focus:outline-none focus:ring-2 focus:ring-[#0a4ea3] focus:ring-offset-2 transition-all duration-200 shadow-lg disabled:opacity-50"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

const ResetPasswordPage = () => {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-white pt-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#083b7a]"></div>
            </div>
        }>
            <ResetPasswordContent />
        </Suspense>
    );
};

export default ResetPasswordPage;
