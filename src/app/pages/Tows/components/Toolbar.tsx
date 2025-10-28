import React from "react";

interface ToolbarProps {
  onToggleForm: () => void;
  showForm: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onToggleForm, showForm }) => (
  <header className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/60 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-10">
    <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
      <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
        Tower OS
        <span className="text-sm text-gray-500 dark:text-gray-400">Dashboard</span>
      </h1>
      <button
        onClick={onToggleForm}
        className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors"
      >
        {showForm ? "Close" : "+ New Tow"}
      </button>
    </div>
  </header>
);
