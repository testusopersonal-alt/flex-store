import { useState } from 'react'

function ProductCard({ name, description, price, images, onAddToCart }) {
  const [currentImage, setCurrentImage] = useState(0)

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length)
  }

  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  return (
    <article className="product-card">
      <div className="product-slider">
        <img src={images[currentImage]} alt={name} />
        {images.length > 1 && (
          <div className="slider-controls">
            <button onClick={prevImage} className="slider-btn">‹</button>
            <span className="slider-dots">
              {images.map((_, i) => (
                <span key={i} className={i === currentImage ? 'dot active' : 'dot'} />
              ))}
            </span>
            <button onClick={nextImage} className="slider-btn">›</button>
          </div>
        )}
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