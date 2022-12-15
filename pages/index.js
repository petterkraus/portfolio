import Image from 'next/image'
import Profile from '../assets/profile.png'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-slate-200 h-[calc(100vh-86px)] grid grid-cols-2 items-center">
            <div className='flex w-1/2 items-center mx-auto'>
                <aside className='pr-8'>
                    <ul className='text-4xl flex flex-col gap-7 text-fuchsia-700'>
                        <li className='cursor-pointer' >
                            <FaLinkedin />
                        </li>
                        <li className='cursor-pointer'>
                            <FaGithubSquare />
                        </li>

                    </ul>
                </aside>

                <div className=''>
                    <h1 className="text-6xl font-bold ">
                        Hello! I'm Petter
                    </h1>
                    <p className='text-2xl pt-2 text-slate-700 font-semibold'>FullStack developer</p>
                    <p className='pt-8 text-xl'>
                        Full stack developer focused on front-end, with experience in React.JS, seeking to offer quality in my work                    </p>

                </div>
            </div>
            <div className='items-start'>
                <Image
                    src={Profile}
                    width={600}
                    height={600}
                    alt='Logo do NextJS'

                />
            </div>
        </div>
    )
}