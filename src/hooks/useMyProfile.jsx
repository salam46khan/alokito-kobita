import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMyProfile = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {data: myPro=[]} = useQuery({
        queryKey: ['myPro'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`user?email=${user.email}`)
            return res.data
        }
    })
    return [myPro]
};

export default useMyProfile;