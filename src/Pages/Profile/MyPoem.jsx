import { useContext, useState } from "react";
import MyPoemCard from "../../Components/MyPoemCard";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyPoem = () => {
    const [myPoems , setMyPoems] = useState([])
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    axiosPublic.get(`mypoem?email=${user.email}`)
    .then(res => {
        setMyPoems(res.data)
    })
    // console.log(myPoems);
    return (
        <div className="md:p-2 flex flex-col gap-4">
            {
                myPoems.map(myPoem => <MyPoemCard key={myPoem._id} myPoem={myPoem}></MyPoemCard>)
            }
        </div>
    );
};

export default MyPoem;