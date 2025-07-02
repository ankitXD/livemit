import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Profile = () => {
  // Placeholder user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: Add update profile logic
  };

  const handleLogout = () => {
    // TODO: Add logout logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-blue-900">
      <div className="w-full max-w-lg bg-zinc-950/90 text-white rounded-2xl shadow-2xl p-8 border border-blue-900/40">
        <h1 className="text-3xl font-bold mb-6 text-blue-300 text-center">
          Profile
        </h1>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              defaultValue={user.name}
              className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user.email}
              className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
              requireds
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Change Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="New password"
              className="bg-zinc-900 text-white placeholder:text-zinc-500 border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Link to="/update-profile">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
            >
              Update Profile
            </Button>
          </Link>
        </form>
        <div className="flex flex-col items-center mt-8 gap-2">
          <Button
            onClick={handleLogout}
            className="w-full bg-zinc-800 hover:bg-red-600 text-red-400 hover:text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
