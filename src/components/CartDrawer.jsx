import { useState } from 'react'

function CartDrawer({ items, isOpen, onClose, onChangeQuantity, onRemove }) {
  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = (event) => {
    event.preventDefault()
    const orderLines = items.map((item) => `${item.name} dengan jumlah ${item.quantity}`).join('\n')
    const message = `halo kak, saya ${customerName.trim()} mau pesan\n${orderLines}\nAlamat pengiriman: ${customerAddress.trim()}`
    window.location.href = `https://wa.me/6289647424178?text=${encodeURIComponent(message)}`
  }

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
          <form className="checkout-form" onSubmit={handleCheckout}>
            <label htmlFor="customer-name">Your name</label>
            <input
              id="customer-name"
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="customer-address">Delivery address</label>
            <textarea
              id="customer-address"
              value={customerAddress}
              onChange={(event) => setCustomerAddress(event.target.value)}
              placeholder="Enter your delivery address"
              rows="2"
              required
            />
            <label className="legal-check">
              <input
                type="checkbox"
                checked={isAgeConfirmed}
                onChange={(event) => setIsAgeConfirmed(event.target.checked)}
                required
              />
              <span>I confirm I meet the legal age and requirements to purchase firearms.</span>
            </label>
            <button className="checkout-button" type="submit">Order via WhatsApp</button>
          </form>
        </>
      )}
    </aside>
  )
}

export default CartDrawer
