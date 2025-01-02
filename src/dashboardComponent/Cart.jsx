import useCart from "../hooks/useCart";


const Cart = () => {

    const [cartItem] = useCart()
    const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Total Cart Item: {cartItem.length}</h1>
                <p>Total Amount: ${totalPrice}</p>
                <button className="btn btn-xs mt-2">Pay Now</button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Item</th>
                                <th>Recipe</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map((item, i) =>
                                    <tr key={i}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item?.name}</div>
                                                    <div className="text-sm opacity-50">Price: ${item?.price}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.recipe}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;