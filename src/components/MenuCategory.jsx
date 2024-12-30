/* eslint-disable react/prop-types */

import Cover from './Cover';
import MenuItem from './MenuItem';
import SectionTitle from './SectionTitle';

const MenuCategory = ({ items, title, img }) => {

    return (
        <div>
            <SectionTitle heading="Today's Offer" subHeading="---Don't Miss---" />
            {title && <Cover img={img} title={title}/>}
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                {
                    items.map((item, i) => <MenuItem key={i} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;