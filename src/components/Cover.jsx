/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero min-h-[800px] bg-cover bg-no-repeat bg-center">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="md:w-[1200px] md:h-[450px] flex flex-col justify-center items-center bg-[#15151599] px-10 py-6 ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-gray-400">
                            Would You Link To Try A Dish?
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;