import { Helmet } from 'react-helmet-async';
import menuImg from '../assets/menu/banner3.jpg'
import Cover from '../components/Cover';
import useMenu from '../hooks/useMenu';
import MenuCategory from '../components/MenuCategory';
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'

const OurMenu = () => {

    const [menu] = useMenu()
    const offer = menu.filter((item) => item.category === "offered")
    const dessert = menu.filter((item) => item.category === "dessert")
    const pizza = menu.filter((item) => item.category === "pizza")
    const salad = menu.filter((item) => item.category === "salad")
    const soup = menu.filter((item) => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="our menu" />

            <MenuCategory items={offer}/>
            <MenuCategory items={dessert} title="Dessert" img={dessertImg}/>
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}/>
            <MenuCategory items={salad} title="Salad" img={saladImg}/>
            <MenuCategory items={soup} title="Soup" img={soupImg}/>
        </div>
    );
};

export default OurMenu;