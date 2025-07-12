import React from "react";

const CopyLinkButton = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={handleCopy}
    >
      Copy Link
    </button>
  );
};

export default CopyLinkButton;
