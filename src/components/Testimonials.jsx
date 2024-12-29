
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from "./SectionTitle";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, [])


    return (
        <div>
            <div>
                <SectionTitle heading="Testimonials" subHeading="---check our testimonials---" />
            </div>
            <div className='md:p-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map((review, i) =>
                            <SwiperSlide key={i}>
                                <div className='md:w-2/3 mx-auto'>
                                    <Rating className='mx-auto' style={{ maxWidth: 250 }} value={review?.rating} />
                                    <div className='text-center my-5'>
                                        <i className="fa-solid fa-quote-left text-8xl"></i>
                                    </div>
                                </div>
                                <div className='md:w-2/3 text-center mx-auto'>
                                    <p>{review?.details}</p>
                                    <h3 className='uppercase text-2xl text-fuchsia-400'>{review?.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;