import { useState } from 'react'

function CartModal({ cart, onClose, onRemove }) {
  const [nombre, setNombre] = useState('')
  const [mensajeListo, setMensajeListo] = useState('')
  const [copiado, setCopiado] = useState(false)
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  function generarMensaje() {
    if (cart.length === 0) return
    if (nombre.trim() === '') {
      alert('Por favor ingresa tu nombre')
      return
    }

    const items = cart.map(item => `- ${item.name} — Q${item.price}`).join('\n')
    const mensaje = `Hola, soy ${nombre} y quiero hacer un pedido:\n${items}\nTotal: Q${total}`
    setMensajeListo(mensaje)
  }

  function copiarMensaje() {
    navigator.clipboard.writeText(mensajeListo)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

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
          <input
            type="text"
            placeholder="TU NOMBRE"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="nombre-input"
          />

          {!mensajeListo ? (
            <button onClick={generarMensaje} className="pedido-btn">
              REALIZAR PEDIDO
            </button>
          ) : (
            <>
              <textarea className="mensaje-box" readOnly value={mensajeListo} />
              <button onClick={copiarMensaje} className="pedido-btn">
                {copiado ? '¡COPIADO!' : 'COPIAR MENSAJE'}
              </button>
              <button onClick={() => window.open('https://www.instagram.com/fl3x_storee', '_blank')} className="ig-btn">
                IR A INSTAGRAM
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartModal