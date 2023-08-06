import { create } from "zustand";
import React from "react";
interface AuthStore {
  isLogin: boolean;
  adminUsername: string;
  adminPassword: string;
  setIsLogin: (status: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  adminUsername: "admin@admin.com",
  adminPassword: "12345@",
  setIsLogin: (status: boolean) => set((state) => ({ isLogin: status })),
}));

export default useAuthStore;
