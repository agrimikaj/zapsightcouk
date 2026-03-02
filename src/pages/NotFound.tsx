import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - ZapSight</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to ZapSight homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-foreground font-display">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/">
              Return to Home
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
