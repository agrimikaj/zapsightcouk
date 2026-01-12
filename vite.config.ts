import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// All routes to prerender for SEO and AI crawler accessibility
const routesToPrerender = [
  "/",
  "/about",
  "/about/how-we-work",
  "/contact",
  "/faqs",
  "/case-studies",
  "/case-studies/customer-analytics",
  "/case-studies/predictive-maintenance",
  "/case-studies/furniture-retailer",
  "/case-studies/pharma-pricing",
  "/case-studies/tire-mroi",
  "/case-studies/software-churn",
  "/case-studies/solar-data",
  "/case-studies/agri-quality",
  "/products/aisac",
  "/products/aivi",
  "/products/unifyer",
  "/products/aidr",
  "/products/sapro",
  "/products/aiven",
  "/products/custex",
  "/products/profast",
  "/products/proman",
  "/industries/energy",
  "/industries/manufacturing",
  "/industries/security",
  "/industries/insurance",
  "/industries/construction",
  "/industries/retail",
  "/demo/aivi",
];

const Renderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: routesToPrerender,
        renderer: new Renderer({
          renderAfterDocumentEvent: "prerender-ready",
          maxConcurrentRoutes: 4,
          headless: true,
        }),
        postProcess(renderedRoute) {
          // Add meta tag to indicate this is a prerendered page
          renderedRoute.html = renderedRoute.html.replace(
            "</head>",
            '<meta name="prerender-status-code" content="200"></head>'
          );
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
  },
}));
