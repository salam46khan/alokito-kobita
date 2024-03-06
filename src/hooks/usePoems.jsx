import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const usePoems = () => {
    const [poem, setPoem] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{      
        axiosPublic.get('/poems')
        .then(res => {
            setPoem(res.data)
        })
    },[axiosPublic])

    return [poem]
    
};

export default usePoems;