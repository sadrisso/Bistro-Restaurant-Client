import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularMenu = data.filter((menu) => menu.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])


    return (
        <div>
            <SectionTitle heading="Popular Menus" subHeading="---check out menus---" />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                {
                    menu.map((item, i) => <MenuItem key={i} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;