import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
    const TO_EMAIL = import.meta.env.VITE_TO_EMAIL?.trim();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear status when user starts typing
        if (status.type) {
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // Validate environment variables
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !TO_EMAIL) {
            setStatus({ 
                type: 'error', 
                message: 'Email service is not configured. Please contact the site administrator.' 
            });
            setIsLoading(false);
            return;
        }

        try {
            // Prepare template parameters
            const templateParams = {
                name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: TO_EMAIL,
                reply_to: formData.email,
            };

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );
            
            setStatus({ 
                type: 'success', 
                message: 'Message sent successfully! I\'ll get back to you soon.' 
            });
            
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            // Provide helpful error messages
            let errorMessage = 'Failed to send message. Please try again.';
            
            if (error?.text) {
                if (error.text.includes('Invalid template ID') || error.text.includes('template')) {
                    errorMessage = 'Email template error. Please check your template configuration.';
                } else if (error.text.includes('Invalid service ID') || error.text.includes('service')) {
                    errorMessage = 'Email service error. Please check your service configuration.';
                } else if (error.text.includes('Invalid public key') || error.text.includes('key')) {
                    errorMessage = 'Authentication error. Please check your EmailJS public key.';
                } else {
                    errorMessage = `Error: ${error.text}`;
                }
            } else if (error?.message) {
                errorMessage = `Error: ${error.message}`;
            }
            
            setStatus({ 
                type: 'error', 
                message: errorMessage 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id='contact' data-aos='fade-up' data-aos-delay='400' className="px-4 sm:px-6 lg:px-8">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-title font-extrabold text-center text-white">
                    Contact Me
                </h2>
                <p className="mb-8 text-center text-gray-300 text-sm sm:text-base">
                    Have a question or want to work together? Send me a message!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div>
                        <label 
                            htmlFor='name' 
                            className="block mb-2 text-base sm:text-lg lg:text-xl font-medium text-white"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 sm:p-3 transition-all"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor='email' 
                            className="block mb-2 text-base sm:text-lg lg:text-xl font-medium text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 sm:p-3 transition-all"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor='message' 
                            className="block mb-2 text-base sm:text-lg lg:text-xl font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            rows='6'
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 sm:p-3 resize-y min-h-[120px] transition-all"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                    
                    {/* Status Messages */}
                    {status.type && (
                        <div className={`p-4 rounded-lg ${
                            status.type === 'success' 
                                ? 'bg-green-500/20 border border-green-500 text-green-300' 
                                : 'bg-red-500/20 border border-red-500 text-red-300'
                        }`}>
                            <p className="text-sm sm:text-base">{status.message}</p>
                        </div>
                    )}

                    <div className="flex justify-center sm:justify-start">
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex items-center justify-center text-white bg-orange-500 border-0 py-2.5 px-6 sm:py-3 sm:px-8 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}