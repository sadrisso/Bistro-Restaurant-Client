import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter((item) => item.category === 'popular');

    return (
        <div>
            <SectionTitle heading="Popular Menus" subHeading="---check out menus---" />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                {
                    popular.map((item, i) => <MenuItem key={i} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;