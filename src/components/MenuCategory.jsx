/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Cover from './Cover';
import MenuItem from './MenuItem';


const MenuCategory = ({ items, title, img }) => {

    return (
        <div>
            {title && <Cover img={img} title={title}/>}
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                {
                    items.map((item, i) => <MenuItem key={i} item={item} />)
                }
            </div>
            <button className='btn border-b-orange-400 border-4 m-3'><Link to={`/order/${title}`}>Order</Link></button>
        </div>
    );
};

export default MenuCategory;