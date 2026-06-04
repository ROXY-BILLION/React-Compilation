import './App.css';
import ProductCard from './components/ProductCard';
import LaptopBag from './assets/laptop bag.jpeg';
import Jacket from './assets/jacket.jpeg';
import Shoes from './assets/shoes2.jpeg';
import SmartWatch from './assets/smartwatch.jpeg';
import HeadPhones from './assets/Headphones.jpeg';
import Laptop from './assets/frontend4.jpeg';

function App() {

  return (
    <div className="card">
      <div className="container">
        <ProductCard
          image={LaptopBag}
          productname="Laptop Bag"
          category="Bags"
          price="$25"/>
        <ProductCard
          image={Jacket}
          productname="Jacket"
          category="clothes"
          price="$45"/>
        <ProductCard
          image={Laptop}
          productname="Laptop"
          category="Gadgets"
          price="$1,234"/>
      </div>
    <div className="container1">
      <ProductCard
        image={Shoes}
        productname="Canvas"
        category="Shoes"
        price="$35"/>
      <ProductCard
        image={SmartWatch}
        productname="SmartWatch"
        category="Accessories"
        price="$65"/>
      <ProductCard
        image={HeadPhones}
        productname="Head Phone"
        category="Accessories"
        price="$75"/>
    </div>
   </div>
  )
}

export default App
