import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SliderHeader from './Components/Slider/Slider';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='App'>
      <Navbar cartItemCount={cartItems.length} toggleCart={toggleCart}/>
      <SliderHeader />
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} isCartOpen={isCartOpen}/>
    </div>  
  );
}

export default App;
