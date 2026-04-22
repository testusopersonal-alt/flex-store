function Navbar({ cartCount, onCartClick }) {
  return (
    <nav>
      <div className="logo">FL3X</div>
      <button onClick={onCartClick}>CART ({cartCount})</button>
    </nav>
  )
}

export default Navbar