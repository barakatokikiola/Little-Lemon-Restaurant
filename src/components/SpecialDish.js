import dish1 from '../assets/dish1.png';
import dish2 from '../assets/dish2.png';
import dish3 from '../assets/dish3.png';
import Menu from './Menu';
import Specials from './Specials';

const SpecialDish=()=>{

    const specials=[
        {
            name: 'Green Salad',
            description: 'Focused on traditional recipes served with a modern twist. focused on traditional',
            price: '$12.99',
            image: dish1
        },
        {
            name: 'Bruschetta',
            description: 'Focused on traditional recipes served with a modern twist. focused on traditional',
            price: '$12.20',
            image: dish2
        },
        {
            name: 'Pasta',
            description: 'Focused on traditional recipes served with a modern twist. focused on traditional',
            price: '$10.99',
            image: dish3
        },
    ]
    const menu =['Lunch', 'Mains',
     'Desserts', 'A La Carte',
     'Specials', 'Breakfast']
    return(
        <div className='deliver'>
        <div className="delivery">
            <h3>ORDER FOR DELIVERY</h3>
        </div>
        <div className='menu-row'>
        {menu.map((menu) => {
        return(
           
             <Menu name={menu}/>
           
        )
       })}
        </div>
     
        <div className="delivery">
            <h3>This Week's Specials!</h3>
            {specials.map((dish)=>  {
                return(
                    <Specials 
                        dish={dish.name}
                        description={dish.description}
                        price={dish.price}
                        image={dish.image}
                    />
                )
            })}
        </div>
        </div>
    )
}

export default SpecialDish;