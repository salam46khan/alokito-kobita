import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

// import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import PageBanner from "../../Components/PageBanner";
import Avatar from "./Avatar";
import AvatarInfo from "./AvatarInfo";
import MyReviews from "./MyReviews";
import MyPoem from "./MyPoem";
import MyFev from "./MyFev";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ProfileUpdateFrm from "./ProfileUpdateFrm";
import useMyProfile from "../../hooks/useMyProfile";

const Profile = () => {
    const axiosPublic = useAxiosPublic()
    const [myProfile, setMyProfile] = useState({})
    const {user} = useContext(AuthContext)
    axiosPublic.get(`user?email=${user.email}`)
    .then(res => {
        // console.log(res.data[0]);
        setMyProfile(res.data[0])
    })

    // const [myPro] = useMyProfile()
    // console.log('kkk', myPro[0]);
    return (
        <div className="font-NormalText">
            <PageBanner title={'My Profile'}></PageBanner>
            <Avatar></Avatar>
            <div className="bg-gradient-to-tr from-[#e7fcfe] to-[#f0eeff] p-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-8 gap-2">
                    <div className="md:col-span-2 p-3">
                        <AvatarInfo proInfo={myProfile}></AvatarInfo>
                    </div>
                    <div className="md:col-span-6 border flex flex-col md:flex-row-reverse gap-2">
                        <div className="w-full md:w-2/6 p-3">
                            <ProfileUpdateFrm proInfo={myProfile}></ProfileUpdateFrm>
                            {/* <p>{myPro[0].email}</p> */}
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
                                    <Tab>
                                        <p className="font-bold">Review</p>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <MyPoem></MyPoem>
                                </TabPanel>
                                <TabPanel>
                                    <MyFev></MyFev>
                                </TabPanel>
                                <TabPanel>
                                    <MyReviews></MyReviews>
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