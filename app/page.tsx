"use client";

import React from "react";
import { TopNav } from "./components/TopNav";
import { Koalit } from "./components/Koalit";

export default function Home() {
  return (
    <main className="h-screen p-8">
      <div className="flex flex-col h-full ">
        <TopNav />
        <Koalit />
      </div>
    </main>
  );
}
