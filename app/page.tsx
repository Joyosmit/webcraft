import Image from "next/image";
import './page.css'
import Card from "./components/Card";
import { PiGitForkLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { CircleDotIcon, Star } from "lucide-react";
import { FaGit, FaGithub } from "react-icons/fa";
import Head from 'next/head';

export default function Home() {
    return (
        <main className="h-full w-full flex flex-col items-center justify-evenly">
            
            {/* Heading text section */}
            <div className="w-full h-[40%] flex justify-evenly p-10 text-[70px]">
                <div className="flex flex-col h-full w-[80%]  main-text">
                    <p className="biotif-text text-[#33383b]">clearlydecoded/
                        <span className="acronym-text font-light">html-css-</span>
                    </p>
                    <p className="acronym-text -mt-6">javascript-tutorial</p>
                </div>
                <div className="image-container">
                    <Image src="/static/cat_2.jpg" alt="banner" width={300} height={100}
                    />
                </div>
            </div>
            <div className="w-full h-[40%] flex flex-col artica-text p-10 text-[50px] text-[#6d7174] -mt-[130px]">
                <p>Example code for HTML, CSS, and Javascript for</p>
                <p className="-mt-2">Web Developers Coursera Course</p>
            </div>
            <footer className="absolute w-full bottom-[30px] p-10 pb-5 flex justify-between">
                <div className="flex justify-between left-0 w-[50%] h-full">
                    <Card icon={<LuUsers />} value={0} desc={"Contribution"} />
                    <Card icon={<CircleDotIcon />} value={0} desc={"Issues"} />
                    <Card icon={<Star />} value={5} desc={"Stars"} />
                    <Card icon={<PiGitForkLight />} value={5} desc={"Forks"} />
                </div>
                <div className="h-full w-14 flex self-center  items-center justify-center">
                    <FaGithub className="h-full w-full text-[#7e8ea5]" />
                </div>
            </footer>
            <div className="w-full h-[30px] bg-[#e44c27] bottom-0 absolute" />
        </main>
    )
}
