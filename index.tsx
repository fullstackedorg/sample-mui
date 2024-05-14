import React from 'react';
import { createRoot } from "react-dom/client";
import App, { themeFile } from "./app";

const div = document.createElement("div");
document.body.append(div);

declare var rpc: any;

const themeMode = await rpc().fs.exists(themeFile)
    ? await rpc().fs.readFile(themeFile, { encoding: "utf8" })
    : null;

createRoot(div).render(<App themeMode={themeMode} />);
