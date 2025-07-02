import React from "react";
import { Button } from "@/components/ui/button";

const mockSessions = [
  {
    id: 1,
    title: "React Portfolio Review",
    date: "2025-06-20",
    totalSubmissions: 12,
    reviewed: 8,
  },
  {
    id: 2,
    title: "UI/UX Feedback Sprint",
    date: "2025-06-15",
    totalSubmissions: 7,
    reviewed: 7,
  },
  {
    id: 3,
    title: "API Design Review",
    date: "2025-06-10",
    totalSubmissions: 5,
    reviewed: 2,
  },
];

const Dashboard = () => {
  // Aggregate stats
  const totalSubmissions = mockSessions.reduce(
    (sum, s) => sum + s.totalSubmissions,
    0
  );
  const totalReviewed = mockSessions.reduce((sum, s) => sum + s.reviewed, 0);
  const totalPending = totalSubmissions - totalReviewed;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-20 pb-20 bg-gradient-to-br from-black via-zinc-900 to-blue-900 text-white">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300 text-center">
          Dashboard
        </h1>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-950/90 rounded-xl p-6 shadow-lg flex flex-col items-center border border-blue-900/40">
            <span className="text-2xl font-bold text-blue-400 mb-2">
              {totalSubmissions}
            </span>
            <span className="text-zinc-300">Total Submissions</span>
          </div>
          <div className="bg-zinc-950/90 rounded-xl p-6 shadow-lg flex flex-col items-center border border-blue-900/40">
            <span className="text-2xl font-bold text-green-400 mb-2">
              {totalReviewed}
            </span>
            <span className="text-zinc-300">Reviewed</span>
          </div>
          <div className="bg-zinc-950/90 rounded-xl p-6 shadow-lg flex flex-col items-center border border-blue-900/40">
            <span className="text-2xl font-bold text-yellow-400 mb-2">
              {totalPending}
            </span>
            <span className="text-zinc-300">Pending</span>
          </div>
        </div>
        {/* Create New Session Button */}
        <div className="flex justify-end mb-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer">
            + Create New Session
          </Button>
        </div>
        {/* List of Sessions */}
        <div className="bg-zinc-950/80 rounded-2xl shadow-2xl p-6 border border-blue-900/40">
          <h2 className="text-2xl font-bold mb-6 text-blue-200">
            Your Sessions
          </h2>
          {mockSessions.length === 0 ? (
            <p className="text-zinc-400">No sessions created yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-black/70 rounded-xl p-5 shadow flex flex-col gap-2 border border-blue-900/30"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-lg text-white">
                      {session.title}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {session.date}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-blue-400">
                      {session.reviewed} reviewed
                    </span>
                    <span className="text-yellow-400">
                      {session.totalSubmissions - session.reviewed} pending
                    </span>
                    <span className="text-zinc-400">
                      {session.totalSubmissions} total
                    </span>
                  </div>
                  <Button className="mt-3 w-fit bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-1 rounded transition-colors cursor-pointer text-sm">
                    View Session
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
