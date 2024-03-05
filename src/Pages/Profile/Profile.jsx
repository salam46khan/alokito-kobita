import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

// import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import PageBanner from "../../Components/PageBanner";
import Avatar from "./Avatar";
import AvatarInfo from "./AvatarInfo";

const Profile = () => {
    return (
        <div>
            <PageBanner title={'My Profile'}></PageBanner>
            <Avatar></Avatar>
            <div className="bg-gradient-to-tr from-[#e7fcfe] to-[#f0eeff] p-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-8 gap-2">
                    <div className="md:col-span-2 p-3">
                        <AvatarInfo></AvatarInfo>
                    </div>
                    <div className="md:col-span-6 border flex flex-col md:flex-row-reverse gap-2">
                        <div className="w-full md:w-2/6 p-3">
                            update profile
                        </div>
                        <div className="w-full md:w-4/6 bg-white p-5 rounded-lg">
                            <Tabs>
                                <TabList>
                                    <Tab>
                                        <p className="font-bold">My Poems</p>
                                    </Tab>
                                    <Tab>
                                        <p className="font-bold">My Favorite</p>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>Any content </h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;