import AboutSec from "./AboutSec";
import RecentPoems from "./RecentPoems";
import WelcomBanner from "./WelcomBanner";

const Home = () => {
    return (
        <div className="font-NormalText">
            <WelcomBanner></WelcomBanner>
            <AboutSec></AboutSec>
            <RecentPoems></RecentPoems>
        </div>
    );
};

export default Home;