"use client";
import { getUser } from "@/services/auth";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";

type User = {
  username: string;
} | null;

type AuthContextType = {
  user: User,
  validateLogin: () => void;
} | undefined;

const AuthContext = createContext<AuthContextType>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User>(null);

  const validateLogin = () => {
    try {
      const token = localStorage.getItem("token") || undefined;
      const user = getUser(token);
      setUser(user);
      if (pathname === "/login" || pathname === "/") router.push("/home");
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      setUser(null);
      router.push("/login");
    }
  }

  useEffect(() => {
    validateLogin();
  }, [])

  return (
    <AuthContext.Provider value={{ user, validateLogin }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
