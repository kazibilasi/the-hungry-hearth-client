
import SectionTitle from '../SectionTitle/SectionTitle';
import FoodMenu from '../Shared/FoodMenu';
import useMenu from '../Hooks/useMenu';

const FromOurMenu = () => {
    const [menu] = useMenu()
    const items = menu.filter(item => item.category === 'popular')
    return (
        <div className=' mt-16'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'from our menu'}
            >
            </SectionTitle>
            <div className=' lg:grid lg:grid-cols-2 gap-5'>
                {
                    items.map(item =><FoodMenu
                    key={item._id}
                    item= {item}
                    ></FoodMenu> )
                }
            </div>

            
        </div>
    );
};

export default FromOurMenu;