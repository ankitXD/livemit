import React from "react";

const SubmissionCard = ({ submission, onReview }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4 text-white">
    <div className="mb-2 font-semibold">{submission.name || "Anonymous"}</div>
    <div className="mb-2 text-zinc-400">{submission.email}</div>
    <div className="mb-2">{submission.projectLink}</div>
    <div className="mb-2 text-sm text-zinc-300">{submission.notes}</div>
    {onReview && (
      <button
        className="mt-2 px-4 py-1 bg-blue-600 rounded text-white hover:bg-blue-700"
        onClick={() => onReview(submission)}
      >
        Mark as Reviewed
      </button>
    )}
  </div>
);

export default SubmissionCard;
