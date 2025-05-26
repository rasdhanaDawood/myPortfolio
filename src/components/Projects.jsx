import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image_1 from '../assets/todo.png'
import image_2 from '../assets/portfolio.jpeg'
import image_3 from '../assets/ecommerce.jpeg'
import image_4 from '../assets/recipeGenerator.png'
import image_5 from '../assets/netflixClone.png'
import image_6 from '../assets/weatherApp.png'


export const Projects = () => {
    const listProjects = [
        { id: 1, image: image_1, title: 'ToDo App', description: 'A simple and intuitive ToDo application built using React.js.' },
        { id: 2, image: image_2, title: 'Portfolio', description: 'A portfolio demonstrating my skills and experience built with React+Vite and Tailwind CSS.' },
        { id: 3, image: image_3, title: 'E-Commerce', description: 'An E-Commerce management system showcases my skills in full-stack web development using NodeJS, HTML, CSS & MongoDB.' },
        { id: 4, image: image_4, title: 'RecipeBook', description: 'A simple and interactive Recipe Book built with React + Vite and deployed on Render.' },
        { id: 5, image: image_5, title: 'Netflix Clone', description: 'A Netflix Clone built with React+Vite, featuring a sleek UI and movie browsing functionality.' },
        { id: 6, image: image_6, title: 'Weather App', description: 'A simple React-based Weather App to check the current weather in any city using the OpenWeatherMap API.' },
        
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-title font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {
                        listProjects.map((project) => (
                            <div key={project.id} className='p-4'>
                                <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(225,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full lg:h-48 md:h-50 sm:h-70 object-fill object-center' />
                                    <div className='p-6'>
                                        <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                        <p className='leading-relaxed mb-3 md:h-40 lg:h-25 max-md:h-15'>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}