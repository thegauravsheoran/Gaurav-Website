"use client"


import CountUp from "react-countup"

const stats = [
    {
        count: 1,
        title: 'Years of Experience',
        suffix: '+'
    },
    {
        count: 5,
        title: 'Projects Completed'
    },
    {
        count: 10,
        title: 'Technologies Used'
    },
    {
        count: 300,
        title: 'Code Commits',
        suffix: '+'
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt:0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto xl:max-w-none ">
                    {stats.map((stat, index) => {
                        return (
                            <div key={index} className="flex-1 flex items-center justify-center gap-4 xl:justify-start">
                                <CountUp
                                    suffix={stat.suffix || ''}
                                    end={stat.count}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold text-accent " />
                                <span
                                    className={`${stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                                 leading-snug text-white/80`}>{stat.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
