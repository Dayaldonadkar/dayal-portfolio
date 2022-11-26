import React from 'react'; 
import { Typewriter } from 'react-simple-typewriter';

const Midhome = () => {
  return (
    <div className='container mx-auto flex items-center'>
        <div className='mt-[80px] pl-3 h-[371px]'>
            <p className='font-bold leading-[60px] text-5xl'>Hi, I'm Dayal</p>
        
            <h1 className='text-lg mt-3'>
                 <span>
                    <Typewriter
                    words={['and I am Front End Developer']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    delaySpeed={1000}
                    />
                </span> 
            </h1>


            <p className=' mt-11 font-light leading-9 text-2xl'>
                A passionate Front End Software Developer having a special interest in design and building Web applications with 
                JavaScript / React Js/ Node Js / and some other cool libraries and frameworks.
            </p>
            <div className='mt-10 text-lg text-white flex'>
                <img className='px-9 mt-4 h-4' src={require('./GitHub-2.png')} alt=' '/>
                <button  className='bg-primary 0 px-4 py-2 h-12 rounded-md mr-8'>View on GitHub</button>
                <button className='flex space-x-1 items-center justify-center bg-primary transform transition duration-100 hover:scale-110 px-4 py-2 h-12 rounded-md'>
                    <img className='h-6 w-6' src={require('./linkedin.png')} alt=' '/>
                    <span>View on LinkedIn</span>
                </button>
            </div>
        </div>
        <div className='rounded-full bg-slate-400'>
            <img className='h-[188px] w-58 rounded-full p-2' src={require('./Dayal.jpg')} alt=' '/>
        </div>
    </div>
  )
}

export default Midhome;