import React from "react";

const FormField = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
      return (
        <div className="mb-4">
          <label className="block mb-1 text-zinc-200">{field.label}</label>
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
            placeholder={field.placeholder}
          />
        </div>
      );
    case "textarea":
      return (
        <div className="mb-4">
          <label className="block mb-1 text-zinc-200">{field.label}</label>
          <textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
            placeholder={field.placeholder}
          />
        </div>
      );
    case "select":
      return (
        <div className="mb-4">
          <label className="block mb-1 text-zinc-200">{field.label}</label>
          <select
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
          >
            <option value="">Select...</option>
            {field.options &&
              field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </div>
      );
    case "file":
      return (
        <div className="mb-4">
          <label className="block mb-1 text-zinc-200">{field.label}</label>
          <input
            type="file"
            onChange={(e) => onChange(e.target.files[0])}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
          />
        </div>
      );
    default:
      return null;
  }
};

export default FormField;
