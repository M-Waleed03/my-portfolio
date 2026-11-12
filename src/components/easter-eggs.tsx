"use client";

import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;
    if (typeof console === "undefined") return;

    console.log(
      "%cYou found the secret console! Type your first name and press Enter.",
      "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
    );

    ["waleed", "Waleed", "WALEED"].forEach((name) => {
      if (Object.hasOwn(window, name)) return;
      Object.defineProperty(window, name, {
        get() {
          console.log(
            "%cYou just summoned the magic of Waleed!",
            "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
          );

          const timer = setTimeout(() => {
            console.log("Press 'n' on the page to see a little cat fly by!");
            clearTimeout(timer);
          }, 7000);
          return "";
        },
      });
    });
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
