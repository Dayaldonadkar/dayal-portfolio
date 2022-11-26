import React from 'react';
import './home.css';
import Resume from "./Dayal.pdf";


const Home = () => {
  return (
    <>
      <div className='bg-gray-100 h-[75px] container mx-auto flex justify-between items-center'>
              <p className='hover'>Dayal</p>
              <div className='flex space-x-6 leading-6 font-light '>
                  <p className='hover'>Home</p>
                  <p className='hover'>About</p>
                  <p className='hover'>What I do?</p>
                  <p className='hover'>Skills</p>
                  <p className='hover'>Experience</p>
                  <p className='hover'>Projects</p>
                  <p className='hover'>Contact</p>
                  
                  <p className='border-2 border-primary text-primary rounded-lg px-1 hover:bg-primary/30 hover:text-white'><a href = {Resume} target = "">Resume</a></p>
              </div>
      </div>
      
    </>
  )
}

export default Home;