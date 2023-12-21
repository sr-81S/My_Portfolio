import React from 'react'
import HeroSection from '../components/HeroSection'
import SkillSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'

const Home = () => {
  return (
    <div className='container bg-slate-400'>
        <HeroSection/>
        <SkillSection/>
        <ProjectSection/>
    </div>
  )
}

export default Home