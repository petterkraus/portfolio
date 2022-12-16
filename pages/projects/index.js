import Image from 'next/image';
import NotReady from '../../assets/notready.jpg'


export default function Projects() {
    return (
        <div className="bg-slate-200 min-h-screen pt-10 mb-8">
            <Image
                alt='NOT READY BRO'
                src={NotReady}

            />
        </div>
    )
}