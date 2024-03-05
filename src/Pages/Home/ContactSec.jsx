import ContactForm from '../../Components/ContactForm';
import contact from '../../assets/img/Contact us.gif'
const ContactSec = () => {
    return (
        <div className="py-14 px-3">
            <div className="container mx-auto flex items-center">
                
                <div className="w-full md:w-1/2">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Contact Us</h2>
                    <hr className='w-[280px] border-4 border-NavyBlue' />
                    <div className='mt-10'>
                        <ContactForm></ContactForm>
                    </div>
                </div>

                <div className="w-1/2 hidden md:block">
                    <img className='w-4/5 mx-auto' src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactSec;