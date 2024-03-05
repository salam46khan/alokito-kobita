import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";

const LogoutBtn = () => {
    const {logOut} = useContext(AuthContext)
    const handleLogout = () =>{
        // console.log('out');
        logOut()
            .then(() => {
                console.log('log out successful');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Button onClick={handleLogout} className="bg-red-400  flex items-center mx-auto gap-2 text-white">
                Logout
                <MdLogout className="text-xl"/>
            </Button>
        </div>
    );
};

export default LogoutBtn;