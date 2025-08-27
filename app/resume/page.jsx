"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "motion/react";

// about data
const about = {
    title: "About me",
    description: "Lore ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            field: "Name",
            fieldValue: "Pedro Flores"
        },
        {
            field: "Phone",
            fieldValue: "(+34) 000000000"
        }, {
            field: "Experience",
            fieldValue: "3+ Years"
        }, {
            field: "Nationality",
            fieldValue: "Spanish"
        }, {
            field: "Email",
            fieldValue: "my_email@gmail.com"
        },
        {
            field: "Status",
            fieldValue: "Open To Work"
        },
        {
            field: "Language",
            fieldValue: "Spanish, English"
        },
    ]
}

const experience = {
    icon: "",
    title: "My experience",
    description: "Lore ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            company: "Alight",
            position: "Develper Intern",
            duration: "April 2021- September 2021"
        },
        {
            company: "University of Granada",
            position: "IoT Resercher",
            duration: "September 2021- February 2022"
        },
        {
            company: "Meteologica",
            position: "Developer",
            duration: "May 2022- Present"
        }
    ]
}

const education = {
    icon: "",
    title: "My education",
    description: "Lore ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            institution: "University of Granada",
            degree: "Bachelors' Degree in Computer Science",
            duration: "2016-2020"
        },
        {
            institution: "University of Granada",
            degree: "Bachelors' Degree in Mathematics",
            duration: "2016-2020"
        },
        {
            institution: "University of Granada",
            degree: "Masters' in Computer Science",
            duration: "2020-2021"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lore ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    items: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "Node js"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
    ]
}

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1
            }}
            transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full h-full">
                            <div className="flex flex-col gap-[40px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            </div>
                            <ScrollArea className="h-[400px] pt-10" >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return <li key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left h3">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full h-full">
                            <div className="flex flex-col gap-[40px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            </div>
                            <ScrollArea className="h-[400px] pt-10" >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return <li key={index}
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left h3">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.items.map((item, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-x-[620px] mx-auto xl:mx-0">
                                    {about.items.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.field}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    );
};