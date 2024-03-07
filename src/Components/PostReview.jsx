import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const PostReview = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleReview = event => {
        event.preventDefault()
        const testimonial = event.target.review.value;
        const avater = user.photoURL;
        const name = user.displayName;
        const avater_email = user.email;
        const reviewContent = { name, testimonial, avater, avater_email }
        console.log(reviewContent);

        axiosPublic.post('/reviews', reviewContent)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Your review submit successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="md:p-5">
            <div className="shadow-xl rounded-lg p-5">
                <form onSubmit={handleReview}>
                    <textarea name='review' className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="message" required />
                    <div className="mt-5 flex justify-center">
                        <input className="bg-cyan-200 rounded-full inline-block px-8 uppercase text-sm  focus:outline-none focus:shadow-outline py-3 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 font-semibold" type="submit" value={'Send'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostReview;