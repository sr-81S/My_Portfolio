import React from 'react'
import Profile_pics from "../../Asset/pics.jpg"


const HeroSection = () => {
  return (
    <section className='container px-20 py-20 bg-slate-100 flex justify-center items-center gap-8 ' >
        <div className='w-1/2 px-10 flex flex-col justify-center' >
            {/* Name and Details Div */}
            <h1 className='font-bold text-5xl mb-1 text-teal-800 ' >Saroz Savar</h1>
            <p className='mb-4 font-medium text-base text-teal-700' >MERN Stack Developer</p>
            <p className='text-base text-teal-700 font' >Enthusiastic web developer with foundational skills in both frontend and backend development, including a solid understanding of the MVC architecture and experience creating REST APIs. 
            Proficient in building frontend interfaces using React functional components and efficiently fetching data from the backend.</p>
            <div className='mt-7 flex items-center gap-6' >
                <a href='#'  className='flex items-center gap-2 bg-teal-300 px-3 py-2 rounded-sm cursor-pointer ' >
                    <i className="fa-brands fa-instagram text-2xl"></i>
                    <p className='text-lg' >Instagram</p>
                </a>
                <a href='https://www.linkedin.com/in/saroj-sabar-dev/' className='flex items-center gap-2 bg-teal-300 px-3 py-2 rounded-sm cursor-pointer ' >
                    <i class="fa-brands fa-linkedin text-2xl"></i>
                    <p className='text-lg' >Linkedin</p>
                </a>
                <a href='https://github.com/sr-81S' className='flex items-center gap-2 bg-teal-300 px-3 py-2 rounded-sm cursor-pointer '>
                    <i class="fa-brands fa-github text-2xl"></i>
                    <p className='text-lg' >GitHub</p>
                </a>
            </div>
        </div>
        <div className='w-1/2 flex items-center justify-center ' >
            <img className='rounded-3xl w-[80%] ' src={Profile_pics} alt="User_Profile" />
        </div>
    </section>
  )
}

export default HeroSection