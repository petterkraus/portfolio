import { useState } from "react";
export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleFields(e) {
        setForm({ ...form, [e.name]: [e.value] })
    }
    return (
        <div className="bg-slate-200 min-h-[calc(100vh-86px)] pt-10 flex justify-center">
            <div className="bg-white w-[40rem] py-10 h-fit">
                <div className='flex justify-center'>
                    <h1 className="text-5xl font-poppins font-bold"> Contact me</h1>
                </div>
                <form className="px-12 mt-4 flex flex-col gap-4 items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => handleFields(e.target)}
                        className="border border-gray-300 h-12 pl-2 rounded-md w-full" />
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border border-gray-300 h-12 pl-2 rounded-md w-full" />
                    <textarea
                        required
                        name="message"
                        type="text"
                        placeholder="Message"
                        className="border border-gray-300 h-64 pl-2 rounded-md w-full"
                    />

                    <button type="submit" className="font-poppins w-32 h-11 bg-fuchsia-800 hover:bg-fuchsia-600 text-xl text-white rounded-xl">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}