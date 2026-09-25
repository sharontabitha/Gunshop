function CartDrawer({ items, isOpen, onClose, onChangeQuantity, onRemove }) {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <aside className={isOpen ? 'cart-drawer is-open' : 'cart-drawer'} aria-hidden={!isOpen}>
      <div className="cart-header">
        <div>
          <span className="eyebrow">YOUR SELECTION</span>
          <h2 className="display">Cart <span>({totalItems})</span></h2>
        </div>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close cart">&times;</button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p className="display">Your cart is empty.</p>
          <span>Add a piece from the vault to get started.</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.name}>
                <img src={item.image} alt="" width="72" height="54" />
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>${item.price.toLocaleString()} each</span>
                  <div className="quantity-control">
                    <button type="button" onClick={() => onChangeQuantity(item.name, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onChangeQuantity(item.name, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </div>
                </div>
                <button className="remove-item" type="button" onClick={() => onRemove(item.name)} aria-label={`Remove ${item.name}`}>Remove</button>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <span>Subtotal</span>
            <strong>${subtotal.toLocaleString()}</strong>
          </div>
          <button className="checkout-button" type="button" onClick={() => window.alert('Checkout is ready to connect to your payment flow.')}>Proceed to checkout</button>
        </>
      )}
    </aside>
  )
}

export default CartDrawer
