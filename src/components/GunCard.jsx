import { useRef } from 'react'

function GunCard({ gun, onAddToCart }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <button className="card-btn" onClick={() => popup.current.showModal()}>
        <img className="card-img" src={gun.image} alt={`${gun.name} illustration`} width="120" height="90" />
        <span className="name display">{gun.name}</span>
        <span className="type">
          {gun.type} · {gun.caliber}
        </span>
        <span className="price">${gun.price.toLocaleString()}</span>
        <span className="card-action">View details</span>
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <img className="popup-img" src={gun.image} alt={`${gun.name} illustration`} width="240" height="180" />
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} · {gun.caliber} · <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        <button className="add-button" type="button" onClick={() => { onAddToCart(gun); popup.current.close() }}>
          Add to cart
        </button>
        <form method="dialog">
          <button className="popup-close">Close</button>
        </form>
      </dialog>
    </li>
  )
}

export default GunCard