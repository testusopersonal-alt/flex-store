import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartModal from './components/CartModal'
import products from './products'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(name, price) {
    
    setCart([...cart, { name, price }])
  }

  function removeFromCart(index) {
  setCart(cart.filter((_, i) => i !== index))
}

  return (
    <div>
      <div className="watermark">fl3x_storee</div>
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
        <Hero />
      <section className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            images={product.images}
            onAddToCart={addToCart}
          />
        ))}
      </section>
      {cartOpen ? <CartModal cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} /> : null}
        <Footer />
    </div>
    
  )
}

export default App