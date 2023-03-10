import React from 'react';
import icon from '../assets/Dish icon.svg'

const CardSpecial = ({img,dish}) => {
    return (
        <div className='card'>
            <div className='card-img-conteiner'>
                <img src={img} alt="salad" 
                className='card-img'/>
            </div>

            <div className='card-prices'>
                <span>{dish.title}</span>
                <span className='price'>${dish.price}</span>
            </div>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit nesciunt tempore placeat ut vel aperiam esse adipisci, ea praesentium eius, similique fuga doloribus autem? Sequi dolor suscipit tempora similique!
            </div>
            <a href='/order-online' className='card-link'>
                <span>
                Order a delivery 
                </span>
            <img src = {icon} alt="icon" className='card-link-icon' />
             </a>
        </div>
    );
}

export default CardSpecial;
