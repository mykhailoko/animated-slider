import './Menu.css';
import ShawarmaCard from '../../Assets/shawarma-card.png';
import BurgerCard from '../../Assets/burger-card.png';
import DonerCard from '../../Assets/doner-card.png';

export default function Menu({ addToCart }) {
  const products = [
    { id: 1, name: 'Shawarma', price: 100, image: ShawarmaCard },
    { id: 2, name: 'Burger', price: 200, image: BurgerCard },
    { id: 3, name: 'Doner', price: 300, image: DonerCard },
  ];

  return (
    <div className='menu'>
      <h1 className='title'>Menu</h1>
      <div className='list'>
        {products.map(product => (
          <div key={product.id} className='card'>
            <img className='image-card' src={product.image} alt={product.name} />
            <h2 className='title-card'>{product.name}</h2>
            <p className='price'>${product.price}</p>
            <button className='add-button' onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
