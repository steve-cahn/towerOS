"use client";

import { useState } from "react";
import { useTows } from "./hooks/useTows";
import { TowForm } from "./components/TowForm";
import { TowTable } from "./components/TowTable";
import { SearchBar } from "./components/SearchBar";
import { Toolbar } from "./components/Toolbar";

export function Tows() {
  const [showForm, setShowForm] = useState(false);
  const { tows, search, setSearch, createTow, updateTowStatus } = useTows();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Toolbar showForm={showForm} onToggleForm={() => setShowForm(!showForm)} />

      <main className="flex-1 max-w-6xl mx-auto p-6 space-y-8 w-full animate-fadeIn">
        {showForm && (
          <div className="animate-fadeIn bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-gray-100 dark:border-zinc-800">
            <TowForm onCreate={createTow} />
          </div>
        )}

        <section className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-gray-100 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
            <h2 className="text-lg font-semibold">Active Tows</h2>
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <TowTable tows={tows} onStatusChange={updateTowStatus} />
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-zinc-800">
        © {new Date().getFullYear()} Tower OS — Powered by RedwoodSDK ⚡
      </footer>
    </div>
  );
}
