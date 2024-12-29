// import React from 'react';

import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="my-20  bg-featured bg-cover bg-center bg-fixed md:p-20 text-white">
            <SectionTitle subHeading="---featured items---" heading="from our menu" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
                <div>
                    <img className="md:w-[400px]" src={featuredImg} alt="" />
                </div>
                <div className="md:w-[500px] ">
                    <p>23 March, 2023</p>
                    <h1 className="uppercase">Where can I get some</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo modi quia cumque ad dignissimos quos autem. Incidunt, ut molestias. Dolorem nesciunt nihil ipsum. Quod dicta odit ab quam ea nostrum ducimus quibusdam officiis itaque! Incidunt eum labore officiis illo libero! Id vitae sunt voluptates amet blanditiis itaque laboriosam culpa?</p>
                    <button className="btn btn-neutral btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;