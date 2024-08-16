import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi';
import React from 'react'
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software Devloper</span>
            <h1 className='h1'>Hello I'm<br />
              <span className='text-accent'>Gaurav Sheoran</span></h1>
            <p className='max-w-[500px] mt-6 mb-9 text-white/80'>Crafting Inclusive Digital Experiences through Empathy, Innovation, and Interactive Design.</p>
            <div className=' flex flex-col xl:flex-row items-center gap-8'>
            <a href="/assets/resume/resume.pdf" target='_blank' download="/assets/resume/resume.pdf">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 ">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full
                   flex justify-center items-center text-accent
                  text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section >
  )
}

export default Home
