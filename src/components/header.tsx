import { useTheme } from "@/context/theme-provider";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 py-3 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-green-500">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          to="/"
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-2xl font-medium`}
        >
          Khamate
        </Link>
        <div>
          {/* Search */}
          {/* theme toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer"
          >
            toggle
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
