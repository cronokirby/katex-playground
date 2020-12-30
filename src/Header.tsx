import React from "react";
import Github from "./Github";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white py-4 flex items-center justify-between px-8 shadow">
      <div className="flex items-center space-x-4">
        <Logo width={"5em"} />
        <h1 className="text-4xl" style={{ fontFamily: "Katex_Size1" }}>
          Playground
        </h1>
      </div>
      <a href="https://github.com/cronokirby/katex-playground">
        <Github />
      </a>
    </div>
  );
}
