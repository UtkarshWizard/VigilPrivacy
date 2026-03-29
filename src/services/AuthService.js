// services/AuthService.js
import axiosInstance from "../utils/axiosInstance";

export const login = async (email, password, token = null, backupCode = null) => {
  // Directly call the mock axios instance
  const res = await axiosInstance.post("/auth/login", { email });
  return res.data;
};

export const requestPasswordReset = async (email) => {
  return { message: "Reset link sent to " + email };
};

export const resetPassword = async (token, newPassword) => {
  return { message: "Password reset successful" };
};