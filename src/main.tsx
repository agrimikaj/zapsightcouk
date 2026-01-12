import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Signal to prerenderer that the app is ready
// This fires after React has mounted and rendered the initial content
document.dispatchEvent(new Event("prerender-ready"));
