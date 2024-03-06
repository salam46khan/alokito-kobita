import { useEffect, useState } from 'react';
import faqs from '../../assets/img/FAQs.gif'
import Faq from "react-faq-component";
import useAxiosPublic from '../../hooks/useAxiosPublic';
const FAQsection = () => {
    const axiosPublic = useAxiosPublic()
    const [faqq, setFaqq] = useState([])
    // fetch('fake-faq.json')
    //     .then(res => res.json())
    //     .then(data => setFaqq(data))

    useEffect(()=>{
        axiosPublic.get('/faqs')
        .then(res => {
            setFaqq(res.data)
        })
    },[axiosPublic])

    const data = {
        rows: faqq
    };


    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };


    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "NavyBlue",
        rowContentColor: '#bbb',
        rowTitleTextSize: "22px"
    };


    return (
        <div className="py-14 px-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <img className='w-4/5 mx-auto' src={faqs} alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className='mb-10'>
                        <h2 className='text-NavyBlue font-bold text-4xl'>FAQs</h2>
                        <hr className='w-[280px] border-4 border-NavyBlue' />
                    </div>
                    <div>
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQsection;