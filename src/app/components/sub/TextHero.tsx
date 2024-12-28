import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function TextHero() {
  return (
    <div className="h-[30rem] flex items-center justify-center bg-red-500">
      <TextHoverEffect text="ACET" />
    </div>
  );
}
