import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthState } from "@/hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthState();
  const [error, setError] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Dummy credentials
    if (email === "demo@livemit.com" && password === "password123") {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Try demo@livemit.com / password123");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1e, #2a2a2d)",
      }}
    >
      <Link
        to="/"
        className="mb-8 text-2xl font-bold text-white hover:text-blue-400 transition-colors"
        style={{ letterSpacing: "1px" }}
      >
        LiveMit
      </Link>
      <Card className="w-full max-w-md bg-zinc-950 text-white shadow-xl rounded-2xl border border-zinc-800">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Welcome back 👋</CardTitle>
          <CardDescription className="text-zinc-400">
            Log in to access your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mb-4 text-red-400 text-center text-sm">{error}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Your password"
                className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
            >
              Login
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-sm text-zinc-400 bg-zinc-950 px-2">
              <span className="px-2 bg-zinc-950 text-zinc-500">OR</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full text-zinc-900 border-zinc-700 hover:bg-blue-700 hover:text-white font-medium transition cursor-pointer"
          >
            Login with Google
          </Button>
        </CardContent>

        <CardFooter className="justify-center text-sm text-zinc-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:underline ml-1 font-medium cursor-pointer"
          >
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
