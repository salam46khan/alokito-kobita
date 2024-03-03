import PageBanner from "../../Components/PageBanner";
import Intro from "./Intro";
import Mission from "./Mission";
import WhatOffer from "./WhatOffer";

const About = () => {
    return (
        <div className="font-NormalText">
            <PageBanner title={'About'}></PageBanner>
            <Intro></Intro>
            <Mission></Mission>
            <WhatOffer></WhatOffer>
        </div>
    );
};

export default About;