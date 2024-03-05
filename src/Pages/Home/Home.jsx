import AboutSec from "./AboutSec";
import Categories from "./Categories";
import RecentPoems from "./RecentPoems";
import WelcomBanner from "./WelcomBanner";

const Home = () => {
    return (
        <div className="font-NormalText">
            <WelcomBanner></WelcomBanner>
            <AboutSec></AboutSec>
            <RecentPoems></RecentPoems>
            <Categories></Categories>
        </div>
    );
};

export default Home;