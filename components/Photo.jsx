"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
                    className="absolute w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten" >
                    <Image
                        src="/assets/profile_pic_black.jpg"
                        alt="Gaurav"
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full"
                    />
                </motion.div>
            </motion.div>
            <motion.div>
                <motion.svg
                    className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="252"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokelincecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: 1600 }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
