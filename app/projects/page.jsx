"use client"

import { motion } from "framer-motion"
import React from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'JIRA Clone',
    description: 'A realtime Jira Clone built with Node.js and React.',
    stack: [{ name: 'Node.js' }, { name: 'React' }, { name: 'Javascript' }, { name: 'Postgres' }],
    name: 'portfolio',
    image: '/assets/work/jiraImage.png',
    live: "https://jira.ivorreic.com/project/board",
    github: "https://github.com/thegauravsheoran/Realtime-Chat-App-Using-NodeJs-and-SocketIO",
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Portfolio',
    description: 'My portfolio website built with Next.js and Tailwind CSS.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind CSS' }],
    name: 'portfolio',
    image: '/assets/work/thumb5.png',
    live: "https://gaurav-portfolio-mauve.vercel.app/",
    github: "https://github.com/thegauravsheoran/Gaurav-Website",
  },
  // {
  //   num: '03',
  //   category: 'Frontend & Animation',
  //   title: 'Portfolio',
  //   description: 'My portfolio website built with Next.js and Tailwind CSS.',
  //   stack: [{ name: 'Next.js' }, { name: 'Tailwind CSS' }, { name: 'Framer Motion' }],
  //   name: 'portfolio',
  //   image: '/assets/work/thumb3.png',
  //   live: "https://gaurav-portfolio-mauve.vercel.app/",
  //   github: "https://github.com/thegauravsheoran/Gaurav-Website",
  // }
]

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-[130px]">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col xl:flex-row xl:gap-[50px] mb-8 ${index % 2 === 0 ? '' : 'xl:flex-row-reverse'}`}>
              <div className="w-full xl:w-[65%]">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      priority
                      quality={100}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[35%] xl:h-[460px] flex flex-col xl:justify-between ">
                <div className="flex flex-col gap-[30px] h-[50%]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                  <p className="text/white/60">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.stack.map((stack, index) => (
                      <li key={index} className="text-xl text-accent">
                        {stack.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-white/20"></div>
                  <div className="flex items-center gap-4">
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-black" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visit Website</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent">
                            <BsGithub className="text-white text-3xl group-hover:text-black" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects