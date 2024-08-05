"use client"

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { delay, easeIn } from 'framer-motion'

const experiences = [
  {
    title: 'Software Developement Engineer',
    company: 'Codewalla Software Development',
    duration: 'July 2023 - Present',
    href: '/experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero auctor, lacinia mi et, ultrices sapien. Donec nec'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Crowdanalytix Solutions Pvt Ltd',
    duration: 'March 2023 - June 2023',
    href: '/experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero auctor, lacinia mi et, ultrices sapien. Donec nec'
  },
]
const Experience = () => {
  return (
    <section className='min-h-[90vh] flex flex-col justify-center items-center'>
      <div className='mx-auto container'>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {experiences.map((exp, index) => {
            return <div key={index} className='flex flex-1  flex-col justify-center gap-4'>
              <div className='w-full flex justify-between items-center group'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{exp.title}</div>
                <div className='w-[100px] h-[100px]'>
                <Link href={exp.href} className='h-[70px] w-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
                </div>
              </div>
              <span className='text-accent text-xl'>{exp.company}
              <p className='text-white/80 text-sm'>({exp.duration})</p>
              </span>
             
              <p>{exp.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
