import Cover from "../components/Cover";
import orderCoverImg from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodItem from "../components/FoodItem";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {

    const categories = ['Offer', 'Salad', 'Soup', 'Dessert', 'Pizza']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    const offer = menu.filter((item) => item.category === "offered")
    const dessert = menu.filter((item) => item.category === "dessert")
    const pizza = menu.filter((item) => item.category === "pizza")
    const salad = menu.filter((item) => item.category === "salad")
    const soup = menu.filter((item) => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>

            <Cover title="Order Food" img={orderCoverImg} />

            <div className="text-center mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Offer</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 container gap-3 mx-auto">
                            {
                                offer.map((item, i) => <FoodItem item={item} key={i} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 container gap-3 mx-auto">
                            {
                                salad.map((item, i) => <FoodItem item={item} key={i} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 container gap-3 mx-auto">
                            {
                                soup.map((item, i) => <FoodItem item={item} key={i} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 container gap-3 mx-auto">
                            {
                                dessert.map((item, i) => <FoodItem item={item} key={i} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 container gap-3 mx-auto">
                            {
                                pizza.map((item, i) => <FoodItem item={item} key={i} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;