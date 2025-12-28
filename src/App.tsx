import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import AIVIDemo from "./pages/AIVIDemo";
import NotFound from "./pages/NotFound";
import EnergyIndustry from "./pages/industries/EnergyIndustry";
import ManufacturingIndustry from "./pages/industries/ManufacturingIndustry";
import SecurityIndustry from "./pages/industries/SecurityIndustry";
import InsuranceIndustry from "./pages/industries/InsuranceIndustry";
import ConstructionIndustry from "./pages/industries/ConstructionIndustry";
import RetailIndustry from "./pages/industries/RetailIndustry";
import HowWeWork from "./pages/about/HowWeWork";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import FAQs from "./pages/FAQs";
import Insights from "./pages/Insights";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/how-we-work" element={<HowWeWork />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/demo/aivi" element={<AIVIDemo />} />
            <Route path="/industries/energy" element={<EnergyIndustry />} />
            <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
            <Route path="/industries/security" element={<SecurityIndustry />} />
            <Route path="/industries/insurance" element={<InsuranceIndustry />} />
            <Route path="/industries/construction" element={<ConstructionIndustry />} />
            <Route path="/industries/retail" element={<RetailIndustry />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;