import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result=> {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <Button onClick={handleGoogleLogin} className="bg-cyan-200 rounded-full w-full uppercase  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 flex items-center justify-center gap-2 text-black">
                <FcGoogle className="text-xl"/>
                <p>Continue with Google</p>
            </Button>


        </div>
    );
};

export default GoogleLogin;