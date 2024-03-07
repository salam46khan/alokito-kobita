
const ContactForm = () => {
    return (
        <div className="w-full max-w-3xl px-5 py-8 rounded-md shadow-lg shadow-[#0002]">
            <form>
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="mb-4">
                            <label className="block text-NavyBlue text-md mb-2">
                                Full Name
                            </label>
                            <input name='name' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="full name" required />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mb-4">
                            <label className="block text-NavyBlue text-md mb-2">
                                Email
                            </label>
                            <input name='name' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" required />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Subject
                    </label>
                    <input name='subject' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="subject" required />
                </div>
                <div className="mb-4">
                    <label className="block text-NavyBlue text-md mb-2">
                        Message
                    </label>
                    <textarea name='message' className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="message" required />
                </div>
                <div>
                    <input className="bg-cyan-200 rounded-full w-full uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 font-semibold" type="submit" value={'Send'} />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;