import { useState } from "react";

import { toast } from 'react-toastify';

import axios from './../../service/email';
import Input from './../../components/Input/index';


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await axios.post("/send-email", form);

            toast.success("Email sent successfully!", {
                position: "top-center",
                draggable: false,
                theme: "colored",
            })

        } catch (error) {
            console.error(error);

            toast.error("An error occurred while sending the email.", {
                position: "top-center",
                draggable: false,
                theme: "colored",
            })

        }
    }

    function handleFields(e) {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
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
                    <Input
                        required
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => handleFields(e)}
                    />
                    <Input
                        required
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        onChange={(e) => handleFields(e)}
                    />
                    <textarea
                        required
                        name="message"
                        type="text"
                        placeholder="Message"
                        className="border border-gray-300 h-64 p-2 rounded-md w-full focus:outline-2 focus:outline-purple-700 "
                        onChange={(e) => handleFields(e)}
                    />

                    <button type="submit" className="font-poppins w-32 h-11 bg-fuchsia-800 hover:bg-fuchsia-600 text-xl text-white rounded-xl">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}