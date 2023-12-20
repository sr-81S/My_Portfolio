import React from 'react'
import HeroSection from '../components/HeroSection'
import SkillSection from '../components/SkillsSection'

const Home = () => {
  return (
    <div className='container bg-slate-400'>
        <HeroSection/>
        <SkillSection/>
    </div>
  )
}

export default Home