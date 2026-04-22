function ProductCard({ name, description, price, images, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-slider">
        <img src={images[0]} alt={name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-desc">{description}</p>
        <span className="product-price">Q{price}.00</span>
        <button onClick={() => onAddToCart(name, price)}>ADD TO CART</button>
      </div>
    </article>
  )
}

export default ProductCard