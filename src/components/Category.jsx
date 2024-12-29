import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"
import SectionTitle from './SectionTitle';


const Category = () => {
    return (
        <div className='container mx-auto text-center my-20 border'>
            <SectionTitle heading={"Order Online"} subHeading={"---from 11am to 10pm---"} />
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='w-[300px] mx-auto' src={slide1} alt="" />
                        <h2 className='text-3xl uppercase'>Salad</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[300px] mx-auto' src={slide2} alt="" />
                        <h2 className='text-3xl uppercase'>Salad</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[300px] mx-auto' src={slide3} alt="" />
                        <h2 className='text-3xl uppercase'>Salad</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[300px] mx-auto' src={slide4} alt="" />
                        <h2 className='text-3xl uppercase'>Salad</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[300px] mx-auto' src={slide5} alt="" />
                        <h2 className='text-3xl uppercase'>Salad</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;