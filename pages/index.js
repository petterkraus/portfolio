import Image from 'next/image'
import Profile from '../assets/profile.png'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-slate-200 h-[calc(100vh-86px)] grid grid-cols-2 items-center max-md:flex max-md:flex-col max-md:justify-center max-md:gap-9">
            <div className='flex w-1/2 items-center mx-auto max-md:w-full max-md:px-10'>
                <aside className='pr-8'>
                    <ul className='text-4xl flex flex-col gap-7 text-fuchsia-700'>
                        <li className='cursor-pointer' >
                            <a href="https://www.linkedin.com/in/petterkg/">
                                <FaLinkedin />
                            </a>

                        </li>
                        <li className='cursor-pointer'>
                            <a href="https://github.com/petterkraus">
                                <FaGithubSquare />
                            </a>
                        </li>

                    </ul>
                </aside>

                <div className=''>
                    <h1 className="text-6xl font-bold  max-md:text-2xl">
                        Hello! I'm Petter
                    </h1>
                    <p className='text-2xl pt-2 text-slate-700 font-semibold max-md:text-lg'>FullStack developer</p>
                    <p className='pt-8 text-xl max-md:text-sm'>
                        Full stack developer focused on front-end, with experience in React.JS, seeking to offer quality in my work                    </p>

                </div>
            </div>
            <div className='items-start max-md:w-1/2'>
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