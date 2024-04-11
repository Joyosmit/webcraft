import Image from "next/image";
import './page.css'
import Card from "./components/Card";
import { PiGitForkLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
export default function Home() {
    return (
        // <main className="elala">
        //     Hello
        //     <div className="blah">
        //         Javascript
        //     </div>
        //     <div className="artica-text">
        //         Example of Javascript
        //     </div>
        //     <div className="tuffy-text">
        //         bitch
        //     </div>
        // </main>
        <main className="h-full w-full flex flex-col items-center justify-evenly">
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
            <footer className="absolute bottom-[30px] pb-0 flex">
                <div className="grid grid-cols-4 gap-10 left-0 w-[70%] h-full">
                    <Card icon={<LuUsers />} value={0} desc={"Contribution"} />
                    <Card icon={<PiGitForkLight />} value={0} desc={"Issues"} />
                    <Card icon={<PiGitForkLight />} value={0} desc={"Issues"} />
                    <Card icon={<PiGitForkLight />} value={0} desc={"Issues"} />
                </div>
                <div>Gay</div>
            </footer>
            <div className="w-full h-[30px] bg-[#e44c27] bottom-0 absolute" />
        </main>
    )
}
