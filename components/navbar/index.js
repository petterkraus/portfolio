import Link from 'next/link';
import { useState } from 'react';
import { HiCodeBracket } from 'react-icons/hi2'


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <header className="flex bg-slate-900 text-white h-14 items-center justify-between sticky top-0 z-50">
            <h3 className="font-poppins text-2xl font-bold px-6 max-md:text-2xl hover:text-fuchsia-700">
                <Link href='/' className='flex items-center gap-3'>
                    Petter Kraus <HiCodeBracket className='text-3xl' />
                </Link>

            </h3>
            <nav className="max-md:hidden">
                <ul className="flex gap-6 font-semibold">
                    <li className="cursor-pointer hover:text-fuchsia-500">
                        <Link href='/projects' >
                            Projects
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-fuchsia-500">
                        <Link href='/about' >
                            About
                        </Link>
                    </li>
                    <li className="bg-fuchsia-900 w-20 text-center h-7 rounded-full cursor-pointer hover:bg-fuchsia-700">
                        <Link href='/contact' >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className="pr-12 max-md:hidden">{' '}</h1>
            <button className='md:hidden text-4xl pr-5 hover:text-fuchsia-700'
                onClick={toggleMenu}
            >
                &#9776;
            </button>
            <section id='mobile-menu'
                className={`absolute top-0 bg-slate-900 w-full md:hidden text-5xl flex-col items-end origin-top animate-open-menu 
            ${openMenu ? 'flex' : 'hidden'}`}>
                <button className='text-5xl px-6'
                    onClick={toggleMenu}
                >
                    &times;
                </button>
                <nav className='flex flex-col min-h-full self-center items-center py-8 gap-8 text-4xl'
                    onClick={toggleMenu}
                >
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/projects' > Projects </Link>
                    <Link href='/contact'>Contact</Link>

                </nav>
            </section>

        </header>
    );
}