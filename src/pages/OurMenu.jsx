import { Helmet } from 'react-helmet-async';
import menuImg from '../assets/menu/banner3.jpg'
import Cover from '../components/Cover';
import PopularMenu from '../components/PopularMenu';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" />
            <PopularMenu />
        </div>
    );
};

export default OurMenu;