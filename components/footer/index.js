import Image from 'next/image';
import nextLogo from '../../assets/nextLogo.svg'

export default function Footer() {
    return (
        <footer className='flex items-center gap-2 justify-center bg-slate-800 text-white'>
            <p>Powered by</p>
            <Image
                src={nextLogo}
                width={50}
                height={50}
                alt='Logo do NextJS'

            />
        </footer>

    );
}