import React from "react";
import { Link } from "react-router-dom";
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

const ForgotPassword = () => {
  const handleForgot = (e) => {
    e.preventDefault();
    // TODO: Add forgot password logic
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1e, #2a2a2d)",
      }}
    >
      <Card className="w-full max-w-md bg-zinc-950 text-white shadow-xl rounded-2xl border border-blue-900/40">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Forgot Password?</CardTitle>
          <CardDescription className="text-zinc-400">
            Enter your email and we'll send you a reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgot} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
            >
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center text-sm text-zinc-400">
          <Link
            to="/login"
            className="text-blue-400 hover:underline ml-1 font-medium cursor-pointer"
          >
            Back to Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
