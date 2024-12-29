/* eslint-disable react/prop-types */
// import React from 'react';

const MenuItem = ({item}) => {

    const {price, recipe, name, image} = item;

    return (
        <div className="md:flex justify-center items-center gap-4 border md:w-2/3 mx-auto my-5 p-10 hover:bg-slate-200 hover:rounded-lg cursor-pointer" >
            <img className="w-[100px] rounded-t-xl rounded-r-2xl" src={image} alt="" />
            <div>
                <p>{recipe}</p>
                <h2 className="text-2xl uppercase">{name}</h2>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;