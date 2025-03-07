import React from "react";
import { createRoot } from "react-dom/client";
import App, { themeFile } from "./app";
import fs from "fs";

const div = document.createElement("div");
document.body.append(div);

const themeMode = (await fs.exists(themeFile))
    ? await fs.readFile(themeFile, { encoding: "utf8" })
    : null;

createRoot(div).render(<App themeMode={themeMode as "light" | "dark"} />);
