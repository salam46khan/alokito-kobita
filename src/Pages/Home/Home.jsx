import AboutSec from "./AboutSec";
import CallAction from "./CallAction";
import Categories from "./Categories";
import ContactSec from "./ContactSec";
import FAQsection from "./FAQsection";
import RecentPoems from "./RecentPoems";
import Testimonial from "./Testimonial";
import WelcomBanner from "./WelcomBanner";

const Home = () => {
    return (
        <div className="font-NormalText">
            <WelcomBanner></WelcomBanner>
            <AboutSec></AboutSec>
            <RecentPoems></RecentPoems>
            <Categories></Categories>
            <CallAction></CallAction>
            <FAQsection></FAQsection>
            <Testimonial></Testimonial>
            <ContactSec></ContactSec>
        </div>
    );
};

export default Home;