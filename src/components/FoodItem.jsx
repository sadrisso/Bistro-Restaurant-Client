/* eslint-disable react/prop-types */


const FoodItem = ({item}) => {

    const {price, recipe, name, image} = item;

    return (
        <div className="mx-auto my-10">
            <div className="card bg-base-100 shadow-xl border md:h-[500px] p-5">
                <figure>
                    <img
                        className="w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;