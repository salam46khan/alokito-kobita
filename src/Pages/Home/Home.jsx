import AboutSec from "./AboutSec";
import WelcomBanner from "./WelcomBanner";

const Home = () => {
    return (
        <div className="font-NormalText">
            <WelcomBanner></WelcomBanner>
            <AboutSec></AboutSec>
        </div>
    );
};

export default Home;