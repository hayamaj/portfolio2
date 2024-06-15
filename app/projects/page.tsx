"use client";


import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect2 } from '@/components/ui/TextGenerateEffect2';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';

import Footer from '@/components/Footer';


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Dibs = () => {

    return (
        <main className={`bg-white font-mono flex min-h-screen flex-col items-center justify-between`}>
            <FloatingNav navItems={navItems2} />
            <section className="max-w-screen-lg mx-auto px-2 py-20">
            <div className="flex justify-center relative my-20 mb-4 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase -ml-8 tracking-widest text-xs text-center font-medium text-[#0D0628] -mb-4">2022 - 2024</h2>
                <TextGenerateEffect className="text-center md:text-6xl lg:text-8xl" words={'DIBS!'} />
                <p className="text-center font-light md:tracking-wider text-sm md:text-lg lg:text-xl text-[#0D0628]">A <span className="font-bold">Digital Thrift Store</span> Solution to <span className="font-bold">Campus Waste Management</span>.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
            </div>
        </div>

        <div className="flex justify-center relative my-20 mb-56 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-3xl" words={'288 hours on development.'} />
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-3xl" words={'127 interviews conducted.'} />
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-3xl" words={'13 beta-users tested'} />

            </div>
        </div>

{/*
                <div className="flex flex-row justify-center pb-16">
                    <div>
                        <Image
                            src="/haya.png"
                            width={100}
                            height={100}
                            alt="Picture of Haya"
                        />
                    </div>

                    <div className="ml-4 flex justify-center flex-col items-center">
                        <h2 className="mt-8 text-[#0D0628] text-center justify-content max-w-md">
                            Haya AlMajali
                        </h2>
                        <h2 className="text-[#E9C6DD] text-center font-bold justify-content max-w-md">
                            Product Lead
                        </h2>
                    </div>
                </div>
            */}

                <div className="bg-black">
                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 pt-4">MY ROLE</h2>
                    <p className="mt-4 text-gray-300 text-left max-w-5xl lowercase">
                        As Product Manager for dibs, I guided the project from its conceptualization to launch, orchestrating cross-functional teams through <strong className="font-bold">15+</strong> product cycles. This journey encompassed conducting user research, crafting user stories, designing wireframes on Figma, overseeing development, conducting usability testing, and managing cross-functional teams using tools like Trello.
                    </p>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Problem Statement</h2>
                    <p className="mt-4 text-gray-300 text-left max-w-5xl lowercase">
                        During move-out periods, our streets get cluttered with perfectly usable items discarded by students (mostly those living off-campus). It&apos;s not that these items are in bad shape, it&apos;s just easier for students to toss them than to find a new home for them. BU Students actually have a special name for this period &#8212; “Allston Christmas”. While some students do take advantage of this time & scour the streets of Allston for free furniture, it&apos;s not enough to address all the waste left out on the streets during this time. So, I wanted to find a solution that would equally benefit the students & protect our environment.
                    </p>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">User Research Insights</h2>
                    <p className="mt-4 text-gray-300 text-left max-w-5xl lowercase">
                        There was no doubt that the cluttered streets of Boston posed an environmental issue. What we needed confirmation on was the second half of the issue &#8212; how the students were affected. So, we surveyed & interviewed about 50 BU students, focusing on their experience living on/off campus. Here are our preliminary findings:
                    </p>
                    <div className="mt-4">
                        <Image
                            src="/userins.png"
                            width={1200}
                            height={1200}
                            alt="User Research Insights"
                        />
                    </div>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Competitive Analysis</h2>
                    <p className="mt-4 text-gray-300 text-left max-w-5xl lowercase">
                        Our main competitors, such as <strong className="text-gray-200">Craigslist</strong>, <strong className="text-gray-200">Facebook Marketplace</strong> & <strong className="text-gray-200">BuyNothing</strong> lack features tailored for university students. Facebook Marketplace & Craigslist&apos;s broad audience don&apos;t cater specifically to students&apos; needs, especially during move-in/move-out periods. Their interfaces fail to accommodate their fast-paced, mobile-centric lifestyles and they lack the sense of community needed to incentivize students to utilize this solution.
                    </p>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Minimum Viable Product (MVP)</h2>
                    <div className="mt-4">
                        <Image
                            src="/dibs-old.png"
                            width={1000}
                            height={1000}
                            alt="Dibs MVP"
                        />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-[#E9C6DD] text-left uppercase">Key Features</h2>
                    <ul className="mt-4 text-gray-200 list-none space-y-4 lowercase">
                        <li><strong className="text-2xl text-gray-200 uppercase">1. Post</strong> - Post a picture & short description of an item that you&apos;re looking to get rid of.</li>
                        <li><strong className="text-2xl text-gray-200 uppercase">2. View & Favorite</strong> - Scroll through the app, favoriting items that catch your eye & saving them to your profile.</li>
                        <li><strong className="text-2xl text-gray-200 uppercase">3. Proximity-Based Claiming</strong> - Claim & collect items only when you&apos;re in range.</li>
                        <li><strong className="text-2xl text-gray-200 uppercase">4. Filter by Tags</strong> - Filter your search to find items based on tags like location, color, condition & item type.</li>
                    </ul>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Product Roadmap</h2>
                    <p className="mt-4 text-gray-200 text-left max-w-5xl lowercase">
                        In Spring 2022, I applied to the <strong className="text-xl text-gray-200">Spark! Technology Innovation Fellowship</strong> with my idea. This fellowship provided structured instruction on the product innovation process with technical support from experts and industry mentors. As the Technical Innovator, I led a team of 4 students through weekly Agile sprints. We conducted rigorous user research, & translated our findings into user specifications & stories as well as a product roadmap that served as our guide throughout the semester. We built all our prototypes in Miro & Figma, & then developed our market-ready version &#8212; A web application built using React, Firebase, TailwindCSS & Google Maps API.
                    </p>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Product Evolution</h2>
                    <div className="mt-4">
                        <h2 className="text-xl text-gray-200 text-center mb-1 uppercase"> V1 &#8212; Spring 2022</h2>
                        <div className="mt-4">
                            <Image
                                src="/dibs-old.png"
                                width={900}
                                height={900}
                                alt="Dibs Version 1"
                            />
                        </div>
                        <p className="mt-4 text-gray-200 text-left uppercase">
                            My Role: <strong className="text-[#E9C6DD]">Technical Innovator/Lead Developer</strong>
                        </p>
                        <p className="mt-4 text-gray-200 text-left uppercase">
                            Tech Stack: <strong className="text-[#E9C6DD]">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                    </div>

                    <div className="grid place-items-center my-4">
                    <FaArrowDown /> 
                                       </div>

                    <div className="mt-12 text-gray-200 text-left max-w-5xl lowercase">
                        Even after the fellowship ended, I was determined to continue working on Dibs. So, I applied to the <strong className="">Launch Lab product track</strong>, which is a program at BU that provides students with instruction & support to launch their products into the real world. Over the next year, we:
                        <ul className="ml-4 mt-4 text-lg list-none space-y-4">
                            <li><strong className="text-2xl text-gray-200 uppercase">1. Expanded</strong> - Expanded the development team by onboarding two new developers.</li>
                            <li><strong className="text-2xl text-gray-200 uppercase">2. Migrated</strong> - Migrated the application from a web-based platform to a mobile-centric environment.</li>
                            <li><strong className="text-2xl text-gray-200 uppercase">3. Performed</strong> - Performed an overhaul of the app&apos;s UI/UX to enhance usability and optimize engagement.</li>
                            <li><strong className="text-2xl text-gray-200 uppercase">4. Explored</strong> - Explored a more efficient way to facilitate & simplify the acquisition & disposal of items.</li>
                        </ul>
                    </div>

                    <div className="grid place-items-center my-4">
                    <FaArrowDown /> 
                    </div>

                    <div className="mt-8 px-8">
                        <h2 className="text-xl text-gray-200 text-center mb-1 uppercase">V2 &#8212; 2023/4</h2>
                        <div className="mt-4">
                            <Image
                                src="/dibs2.png"
                                width={900}
                                height={900}
                                alt="Dibs Version 2"
                            />
                        </div>
                        <p className="mt-4 text-gray-200 text-left uppercase">
                            My Role: <strong className="text-[#E9C6DD]">Product Lead/Manager</strong>
                        </p>
                        <p className="mt-4 text-gray-200 text-left uppercase">
                            Tech Stack: <strong className="text-[#E9C6DD]">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                    </div>

                    <p className="mt-4 text-gray-200 text-left max-w-5xl">
                        Click here to watch a <Link href="/product/dibs/demo" className="underline decoration-1 underline-offset-2 text-[#E9C6DD]">demo</Link> of the app.
                    </p>
                </div>

                <div className="mt-16 px-8">
                    <h2 className="text-3xl font-bold text-[#E9C6DD] text-left mb-1 uppercase">Next Steps</h2>
                    <div className="grid place-items-center my-4">
                        {/*}
                        <Image
                            src="/images/examplepm.png"
                            width={1000}
                            height={1000}
                            alt="Next Steps"
                        />
    */}
                    </div>
                    <p className="mt-4 text-gray-200 text-left max-w-5xl pb-4">
                        Dibs! is gearing up for its official launch on app stores by late May, and I couldn&apos;t be more excited. This project is an embodiment of everything I am passionate about & skilled in — from crafting code & designs to leveraging technology to address real-world challenges, foster sustainability, and create impactful solutions for users.
                    </p>
                </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Dibs;