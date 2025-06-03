import nodejs from '../assets/nodejs-logo.png'
import react from '../assets/react-logo.svg'
import mongodb from '../assets/mongodb-logo.svg'
import html from '../assets/html5-logo.png'
import css from '../assets/css3-logo.png'
import js from '../assets/js-logo.png'

export default function  Skills(){
    return (
        <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
                <div data-aos='fade-up'
                    data-aos-delay='200'
                    className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-orange-400'>
                    <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium font-title mb-2 text-orange-500'>Skills</h1>
                    <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed font-body text-base text-balance'>
                        I have hands-on experience in front-end development using React.js, JavaScript (ES6+), HTML5, and CSS3, with styling frameworks like Tailwind CSS.
                        On the back-end, I work with Node.js, Express.js, and MongoDB to build full-stack applications. I use Git and GitHub for version control,
                        Postman for API testing, and deploy projects using platforms like Vercel and Netlify. I'm a quick learner with strong problem-solving skills and
                        enjoy collaborating in team environments.
                    </p>
                </div>
                <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
                    <nav className='flex flex-wrap list-none -mb-1'>
                        <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={html} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li> <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={react} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li>  <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={css} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li>
                        <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={nodejs} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li> <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={js} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li> <li className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={mongodb} alt='' className='rounded-full w-24 h-24 object-cover transition-transform transform hover:scale-120 hover:shadow-[0_0_15px_rgba(225,165,0,0.7)] duration-300' />
                        </li> 
                    </nav>
                </div>
            </div>
        </section>
    )
}
