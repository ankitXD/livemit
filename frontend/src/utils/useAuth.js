// Simple mock authentication hook
// Replace with your real authentication logic as needed
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Example: check localStorage for a token
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  return isAuth;
};

export default useAuth;
