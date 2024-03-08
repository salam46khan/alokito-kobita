import PageBanner from "../Components/PageBanner";
import ContactSec from "../Pages/Home/ContactSec";

const ContactUs = () => {
    return (
        <div>
            <PageBanner title={'Contact Us'}></PageBanner>
            <div className="px-3 py-14">
                <div className="container mx-auto">
                    <ContactSec></ContactSec>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;