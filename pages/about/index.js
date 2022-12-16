import { FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiPostgresql } from "react-icons/si";

import AboutMe from '../../assets/aboutme.jpg'
import Image from 'next/image';


export default function About() {
    return (
        <div className="bg-slate-200 min-h-screen pt-10 mb-8">
            <div className='flex justify-center'>
                <h1 className="text-5xl font-poppins font-bold"> About me</h1>
            </div>
            <div className='flex justify-center pt-8 gap-12 items-center max-md:flex-col px-7 h-full'>
                <Image src={AboutMe} alt='Eu de novo' className='rounded-xl' />
                <div className='text-xl w-1/2'>
                    <p >
                        I'm from south Brazil, Porto Alegre city. I'm 35 years old, and I have 4 cats!
                        I felt in love with front-end development, but my back-end skills are always evolving.
                    </p>
                    <br />
                    <p>
                        My main tools are:
                    </p>
                    <div className="pt-4">
                        <ul className='text-4xl flex gap-4 text-fuchsia-700'>
                            <li>
                                <FaReact />

                            </li>
                            <li>
                                <SiNextdotjs />

                            </li>
                            <li>
                                <FaNode />

                            </li>
                            <li>
                                <SiPrisma />

                            </li>
                            <li>
                                <SiPostgresql />

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}