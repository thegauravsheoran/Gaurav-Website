"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

import { motion } from 'framer-motion'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        value: '+91 8816966152',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        value: 'thegauravsheoran@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        value: 'Haryana, India',
    }
];

const Contact = () => {
    return <motion.section initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="py-8 px-0"
    >
        <div className="container mx-full">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's Work together</h3>
                        {/* <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder='Name' />
                            <Input type="phone" placeholder='Phone' />
                            {/* <Input type="lastname" placeholder='Lastname' /> */}
                            <div className="col-span-1 md:col-span-2">
                                <Input type="email" placeholder='Email' />
                            </div>
                        </div>
                        {/* <Select>
                            <SelectTrigger>
                                <SelectValue>Select a Service</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="est">Web Development</SelectItem>
                                    <SelectItem value="cst">Mobile Development</SelectItem>
                                    <SelectItem value="mst">UI/UX Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select> */}
                        <Textarea placeholder="Type your message here." className="h-[200px]" />
                        <Button size="md" className="max-w-40 min-h-[40px]">Send Message</Button>
                    </form>
                </div>
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) => {
                            return <li key={index} className="flex items-center gap-6 mb-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]"> {item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.value}</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>


    </motion.section>
}

export default Contact
