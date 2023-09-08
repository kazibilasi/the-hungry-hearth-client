import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import useMenu from '../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../SectionTitle/SectionTitle';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import drinksImg from '../../assets/menu/banner3.jpg'



const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={img} title={'Our Menu'}></Cover>
            <SectionTitle
            subHeading={'check it ou'}
            heading={'Offer items'}
            ></SectionTitle>
            
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" image={dessertImg}></MenuCategory>
            <MenuCategory items={soup}  title="soup" image={soupImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" image={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" image={pizzaImg}></MenuCategory>
            <MenuCategory items={drinks} title="drinks" image={drinksImg}></MenuCategory>
            

        </div>
    );
};

export default Menu;