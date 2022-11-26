import React from 'react';

const About = () => {
  return (
    <div className='mx-[300px] my-24 flex'>
        <img className='h-[470px]' src={require('./Web.gif')} alt=' '/>
        <div>
            <h1 className='font-bold text-4xl leading-[48px] pb-4 border-b-8 border-[##673AB766] w-[230px]'>About me</h1>
            <p>
                I am graduated from Yashwantrao Chavan University Nashik in 
                Bachelor of arts.
            </p>
            <p>
                While doing my graduation, my freind introduced me to python,then
                I started learning AI/ML but that was not of my type then i star
                Front End Developement I found interest in it. I am highly skilled
                in converting figma file into code. I have attached projects Below.
            </p>
        </div>
    </div>
  )
}

export default About;