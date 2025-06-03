import img_experience from '../assets/Experience.png'
export default function  Experience(){
    return (
        <section id='experience' className=" relative overflow-hidden flex flex-col text-gray-600 body-font">
            <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
                <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
                <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div data-aos="fade-right" data-aos-delay='400' className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                    <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600
                     via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
                    <img src={img_experience} className="object-covermd:w-[300px] md:h-[450px] object-center rounded-md relative z-10" alt="Experience" />
                    
                </div>
                <div data-aos='fade-left' data-aos-delay='400' className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="font-title sm:text-4xl text-3xl mb-4 font-medium text-orange-500">Experience</h1>
                    <h2 className="title-font font-bold text-white sm:text-2xl">Software Developer intern</h2>
                    <h6 className="text-white font-medium">July 2023-August 2024</h6>
                    <p className="mb-8 text-white leading-relaxed">Brototype</p>
                    
                    <h2 className="title-font font-bold text-white sm:text-2xl">Office Administrator</h2>
                    <h6 className="text-white font-medium">January 2022-May 2023</h6>
                    <p className="mb-8 text-white leading-relaxed">MAST Constructions</p>
                    
                    <h2 className="title-font font-bold text-white sm:text-2xl">Software Engineer</h2>
                    <h6 className="text-white font-medium">October 2013-June 2014</h6>
                    <p className="mb-8 text-white leading-relaxed">Wipro Technologies, Infopark, Kerala</p>
                </div>
            </div>
        </section>
    )
};
