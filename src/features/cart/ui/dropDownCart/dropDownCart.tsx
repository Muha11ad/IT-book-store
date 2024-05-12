import { Link } from 'react-router-dom'
import './dropDownCart.scss'

export const DropDownCart = () => {
  return (
    <div className="dropdown-cart">
      <ol className='dropdown-cart__list'>
        <li>
          hello
        </li>
      </ol>

      <p className='dropdown-cart__price'>Subtotal : $0</p>
    <Link className='dropdown-cart__link' to="/cart">
      View Cart
    </Link>
    </div>
  
    )
}
