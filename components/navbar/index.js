import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="flex bg-slate-900 text-white h-14 items-center justify-between sticky top-0">
            <h3 className="font-poppins text-2xl font-bold px-6 max-md:text-2xl">
                <Link href='/'>
                    Petter
                </Link>
                <span className="max-md:hidden">Kraus</span>

            </h3>
            <nav className="">
                <ul className="flex gap-6 font-semibold">
                    <li className="cursor-pointer hover:text-fuchsia-500">      <Link href='/projects' >
                        Projects
                    </Link></li>
                    <li className="cursor-pointer hover:text-fuchsia-500">
                        <Link href='/about' >
                            About
                        </Link>
                    </li>
                    <li className="bg-fuchsia-900 w-20 text-center h-7 rounded-full cursor-pointer hover:bg-fuchsia-700">
                        Contact
                    </li>
                </ul>
            </nav>
            <h1 className="pr-12">{' '}</h1>
        </header>
    );
}