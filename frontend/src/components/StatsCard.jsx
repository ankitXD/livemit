import React from "react";

const StatsCard = ({ label, value, icon }) => (
  <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white">
    {icon && <span className="text-2xl">{icon}</span>}
    <div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-zinc-400 text-sm">{label}</div>
    </div>
  </div>
);

export default StatsCard;
