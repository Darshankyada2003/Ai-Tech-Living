import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();

    // Scroll to the top on every route change
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">{children}</main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}
