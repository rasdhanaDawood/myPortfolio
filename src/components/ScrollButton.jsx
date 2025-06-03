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
                className="fixed bottom-8 right-5 rounded-full shadow-lg "
                aria-label="Scroll To Top"
            ><img src={up_icon} alt="up-icon" className="rounded-full h-8 w-8 transition-transform transform hover:scale-110 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300" />
            </button>
        )
    );
}