import { useState } from "react";

import { toast } from 'react-toastify';

import axios from './../../service/email';
import Input from './../../components/Input/index';


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setSending(true);
        const loading = toast.loading("Trying to send the message...", {
            position: "top-center",
            draggable: false,
            theme: "colored"
        });

        try {

            // await axios.post("/send-email", form);

            toast.update(loading, {
                render: "Email sent successfully!",
                type: "success",
                isLoading: false,
                position: "top-center",
                draggable: false,
                theme: "colored",
                autoClose: 2000,
            });

            clearFields();

            setSending(false);
        } catch (error) {
            console.error(error);

            setSending(true);

            toast.update(loading, {
                render: "Something went wrong, try again please",
                type: "error",
                isLoading: false,
                position: "top-center",
                draggable: false,
                theme: "colored",
                autoClose: 2000,
            });
        }
    }

    function handleFields(e) {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    }


    function clearFields() {
        console.log("ok");
        setForm((prevState) => ({ ...prevState, name: '', email: '', message: '' }));
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
                        value={form.name}
                        onChange={(e) => handleFields(e)}
                    />
                    <Input
                        required
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleFields(e)}
                    />
                    <textarea
                        required
                        name="message"
                        type="text"
                        placeholder="Message"
                        value={form.message}
                        className="border border-gray-300 h-64 p-2 rounded-md w-full focus:outline-2 focus:outline-purple-700 "
                        onChange={(e) => handleFields(e)}
                    />

                    <button
                        disabled={sending}
                        type="submit"
                        className="font-poppins w-32 h-11 bg-fuchsia-800 hover:bg-fuchsia-600 text-xl text-white rounded-xl">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}