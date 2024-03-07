import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialItem from "../../Components/TestimonialItem";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Testimonial = () => {
    const axiosPublic = useAxiosPublic()
    const [review, setReview] = useState([]);
    const topReview = review.slice(0, 5);
    useEffect(()=>{
        axiosPublic.get('/reviews')
        .then(res => {
            setReview(res.data)
        })
    },[axiosPublic])

    const settings = {
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="pt-14 pb-5 px-3 bg-gradient-to-tr from-[#e7fcfe] to-[#f0eeff] ">
            <div className="container mx-auto overflow-hidden">
                <div className="w-full max-w-3xl mx-auto space-y-2 text-center mb-10">
                    <h2 className='text-NavyBlue font-bold text-4xl'>Testimonial</h2>
                    <hr className='w-[280px] mx-auto border-4 border-NavyBlue' />
                    <p className="text-gray-500">
                        Alokito Kobita Poetry Finds Its Voice and Hearts Find Their Song. Alokito Kobita invites you to explore the beauty and power of poetry in its myriad forms.
                    </p>
                </div>
                <Slider {...settings}>
                    {
                        topReview.map(review => <TestimonialItem key={review._id} review={review}></TestimonialItem>)
                    }
                    
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;