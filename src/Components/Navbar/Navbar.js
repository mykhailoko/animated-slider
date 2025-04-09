import './Navbar.css';
import Logo from '../../Assets/logo.png';
import CartIcon from '../../Assets/cart.png';

export default function Navbar({ cartItemCount, toggleCart }) {
  return (
    <div className='navbar'>
      <a href="." target="_blank" rel="noreferrer" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <div className='nav'>
        <a href="." target="_blank" rel="noreferrer" className='nav-one'>Home</a>
        <a href="." target="_blank" rel="noreferrer" className='nav-one'>About us</a>
        <a href="." target="_blank" rel="noreferrer" className='nav-one'>Menu</a>
        <a href="." target="_blank" rel="noreferrer" className='nav-one'>Contacts</a>
      </div>
      <div className='cart'>
        <div className="cart-icon" onClick={toggleCart}>
          <img src={CartIcon} alt="cart" />
        </div>
        <span className='counter'>{cartItemCount}</span>
      </div>
    </div>
  );
}
