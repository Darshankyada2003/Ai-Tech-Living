import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            setVisible(y > 300);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            aria-label="Scroll to top"
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-[60] btn-primary shadow-md"
        >
            ↑
        </button>
    );
}


