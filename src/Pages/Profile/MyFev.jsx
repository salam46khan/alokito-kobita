import { useContext, useState } from "react";
import MyFevCard from "../../Components/MyFevCard";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyFev = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [myFevPoem, setMyFevPoem] = useState([])
    axiosPublic.get(`myfev?email=${user.email}`)
    .then(res => {
        setMyFevPoem(res.data)
    })
    return (
        <div className="md:p-2 flex flex-col gap-4">
            {
                myFevPoem.map(myFevPoem => <MyFevCard key={myFevPoem._id} myFevPoem={myFevPoem}></MyFevCard>)
            }
        </div>
    );
};

export default MyFev;