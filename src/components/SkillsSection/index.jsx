import react_logo from '../../Asset/React.png'
import mongo_db from '../../Asset/mongoDb.png'
import node_js from '../../Asset/nodejs.png'
import express_js from '../../Asset/express.png'
import docker_i from '../../Asset/docker.png'

const SkillSection = () => {
  return (
    <section className='container px-20 py-20 bg-white gap-8 '>
        <div>
            <h2 className="text-center font-bold text-xl text-teal-700 " >My Skills</h2>
        </div>
        <div className="mt-10 grid grid-cols-6 gap-4" >
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={react_logo} alt="react logo" />
                <p>React Js</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={mongo_db} alt="react logo" />
                <p>MongoDB</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={express_js} alt="react logo" />
                <p>Express</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={node_js} alt="react logo" />
                <p>Node Js</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={docker_i} alt="react logo" />
                <p>Docker</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-[30%]' src={react_logo} alt="react logo" />
                <p>React Js</p>
            </div>
        </div>
    </section>
  )
}

export default SkillSection