import AboutSec from "./AboutSec";
import CallAction from "./CallAction";
import Categories from "./Categories";
import ContactSec from "./ContactSec";
import RecentPoems from "./RecentPoems";
import WelcomBanner from "./WelcomBanner";

const Home = () => {
    return (
        <div className="font-NormalText">
            <WelcomBanner></WelcomBanner>
            <AboutSec></AboutSec>
            <RecentPoems></RecentPoems>
            <Categories></Categories>
            <CallAction></CallAction>

            <ContactSec></ContactSec>
        </div>
    );
};

export default Home;