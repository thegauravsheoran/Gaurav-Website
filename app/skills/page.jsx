import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiSass, SiCplusplus, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si'
import React from 'react'

const skills = [
  {
    title: 'HTML',
    description: 'HTML is the standard markup language for documents designed to be displayed in a web browser.',
    icon: <FaHtml5 />,
  },
  {
    title: 'CSS',
    description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.',
    icon: <FaCss3 />,
  },
  {
    title: 'Sass',
    description: 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS.',
    icon: <SiSass />,
  },
  {
    title: 'C++',
    description: 'C++ is a general-purpose programming language created as an extension of the C programming language.',
    icon: <SiCplusplus />,
  },
  {
    title: 'JavaScript',
    description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.',
    icon: <FaJs />,
  },
  {
    title: 'TypeScript',
    description: 'TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language.',
    icon: <SiTypescript />,
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    icon: <FaReact />,
  },
  {
    title: 'Next.js',
    description: 'Next.js is a React framework for production.',
    icon: <SiNextdotjs />,
  },
  {
    title: 'Tailwind CSS',
    description: 'Tailwind CSS is a utility-first CSS framework.',
    icon: <SiTailwindcss />,
  },
  {
    title: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    icon: <FaNodeJs />,
  },
  {
    title: 'Express.js',
    description: 'Express.js is a minimal and flexible Node.js web application framework.',
    icon: <SiExpress />,
  },
  {
    title: 'MongoDB',
    description: 'MongoDB is a general purpose, document-based, distributed database.',
    icon: <SiMongodb />,
  },
]

const Skills = () => {
  return (
    <div className='w-full h-full flex justify-center items-center pb-[8%] px-0'>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          {/* <h3 className='text-4xl font-fold'>Skills</h3> */}
          {/* <p className='max-w-[40vw] text-white/60 mx-auto xl:mx-0'>
          "A diverse skill set encompassing modern web development technologies and tools."
          </p> */}
        </div>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:gap-[30px] gap-4'>
          {skills.map((skill, index) => {
            return <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-full min-w-[170px] h-[170px] group bg-[#232329] rounded-xl flex flex-col justify-center items-center'>
                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                    <p className='mt-2 group-hover:text-accent transition-all duration-300 text-white'>{skill.title}</p>
                  </TooltipTrigger>
                  {/* <TooltipContent>
                    <p>{skill.title}</p>
                  </TooltipContent> */}
                </Tooltip>
              </TooltipProvider>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills
