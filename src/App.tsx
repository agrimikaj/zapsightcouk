import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";

// Eager load Index for fast initial render
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CLaiMPage = lazy(() => import("./pages/products/CLaiMPage"));
const AISACPage = lazy(() => import("./pages/products/AISACPage"));
const AIVIPage = lazy(() => import("./pages/products/AIVIPage"));
const FiveOn5Page = lazy(() => import("./pages/products/FiveOn5Page"));
const AIVIDemo = lazy(() => import("./pages/AIVIDemo"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EnergyIndustry = lazy(() => import("./pages/industries/EnergyIndustry"));
const ManufacturingIndustry = lazy(() => import("./pages/industries/ManufacturingIndustry"));
const SecurityIndustry = lazy(() => import("./pages/industries/SecurityIndustry"));
const InsuranceIndustry = lazy(() => import("./pages/industries/InsuranceIndustry"));
const ConstructionIndustry = lazy(() => import("./pages/industries/ConstructionIndustry"));
const RetailIndustry = lazy(() => import("./pages/industries/RetailIndustry"));
const HowWeWork = lazy(() => import("./pages/about/HowWeWork"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Insights = lazy(() => import("./pages/Insights"));
const Console = lazy(() => import("./pages/Console"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/how-we-work" element={<HowWeWork />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/claim" element={<CLaiMPage />} />
              <Route path="/products/aisac" element={<AISACPage />} />
              <Route path="/products/aivi" element={<AIVIPage />} />
              <Route path="/products/5on5" element={<FiveOn5Page />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/demo/aivi" element={<AIVIDemo />} />
              <Route path="/industries/energy" element={<EnergyIndustry />} />
              <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
              <Route path="/industries/security" element={<SecurityIndustry />} />
              <Route path="/industries/insurance" element={<InsuranceIndustry />} />
              <Route path="/industries/construction" element={<ConstructionIndustry />} />
              <Route path="/industries/retail" element={<RetailIndustry />} />
              <Route path="/console" element={<Console />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;