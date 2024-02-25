"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (resolvedTheme === "dark")
    return (
      <button
        className="flex gap-2 items-center text-sm"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="w-4 h-4" />
        <span className="font-semibold">Light Theme</span>
      </button>
    );

  return (
    <button
      className="flex gap-2 items-center text-sm"
      onClick={() => setTheme("dark")}
    >
      <MoonIcon className="w-4 h-4" />
      <span className="font-semibold">Dark Theme</span>
    </button>
  );
}
