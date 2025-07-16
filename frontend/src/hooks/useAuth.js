import { useState } from "react";

// Dummy auth state for frontend-only testing
export function useAuthState() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("livemit_isAuth") === "true";
  });
  const login = () => {
    setIsAuth(true);
    localStorage.setItem("livemit_isAuth", "true");
  };
  const logout = () => {
    setIsAuth(false);
    localStorage.setItem("livemit_isAuth", "false");
  };
  return { isAuth, login, logout };
}

// useAuth hook for PrivateRoute
export default function useAuth() {
  return localStorage.getItem("livemit_isAuth") === "true";
}
