"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
}

export default function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Handle mounting state to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    if (!theme || theme === 'system') {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  // If not mounted yet, return a placeholder button to avoid layout shift
  if (!mounted) {
    return (
      <div className={className}>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-xs text-align-center"
        >
          <span className="sr-only">Loading theme toggle</span>
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <Button
        variant="outline"
        size="icon"
            className="h-8 w-8 text-xs text-align-center"
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
        }}
      >
        {theme === "light" ? (
          <LuSun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <LuMoon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}