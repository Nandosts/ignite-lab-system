import React from "react";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-violet-500">
        hello world
      </h1>

      <button className="rounded bg-cyan-500 px-4 py-2 font-medium text-white hover:bg-cyan-300">
        Botão
      </button>
    </div>
  );
}
