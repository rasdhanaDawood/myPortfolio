import { useEffect, useState } from "react"
import up_icon from '../assets/up-icon.webp'


export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition"
                aria-label="Scroll To Top"
            ><img src={up_icon} alt="up-icon" className="rounded-full h-10 w-10 border-2 border-white" />
            </button>
        )
    );
}