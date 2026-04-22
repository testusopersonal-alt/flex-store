function CartModal({ cart, onClose, onRemove}) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-modal" style={{ display: 'block' }}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>YOUR CART</h2>
          <button onClick={onClose}>CLOSE [X]</button>
        </div>
        <div className="cart-items">
          {cart.map((item, index) => (
  <div key={index} className="cart-item">
    <div className="item-info">
      <span>{item.name}</span>
      <br />
      <small>Q{item.price}.00</small>
    </div>
    <button onClick={() => onRemove(index)} style={{color: 'red', fontSize: '0.7rem'}}>
      ELIMINAR [X]
    </button>
  </div>
))}
        </div>
        <div className="cart-footer">
          <p>TOTAL: Q{total}.00</p>
          <small>TOMA CAPTURA PARA INSTAGRAM</small>
        </div>
      </div>
    </div>
  )
}

export default CartModal