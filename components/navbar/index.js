export default function Navbar() {
    return (
        <header className="flex bg-slate-900 text-white h-14 items-center justify-between sticky top-0">
            <h3 className="font-poppins text-2xl font-bold px-6">Petter Kraus</h3>
            <nav className="">
                <ul className="flex gap-6 font-semibold">
                    <li className="cursor-pointer hover:text-fuchsia-500">Projetos</li>
                    <li className="cursor-pointer hover:text-fuchsia-500">Sobre</li>
                    <li className="bg-fuchsia-900 w-20 text-center h-7 rounded-full cursor-pointer hover:bg-fuchsia-700">Contato</li>
                </ul>
            </nav>
            <h1 className="pr-12">{' '}</h1>
        </header>
    );
}