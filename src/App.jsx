import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import GUNS from './data/guns.js'
import './App.css'

function App() {
	const [tab, setTab] = useState('Catalog')
	const [theme, setTheme] = useState(() => localStorage.getItem('iron-vault-theme') || 'dark')
	const [cartItems, setCartItems] = useState([])
	const [isCartOpen, setIsCartOpen] = useState(false)

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		localStorage.setItem('iron-vault-theme', theme)
	}, [theme])

	const addToCart = (gun) => {
		setCartItems((items) => {
			const existing = items.find((item) => item.name === gun.name)
			if (existing) {
				return items.map((item) => item.name === gun.name
					? { ...item, quantity: item.quantity + 1 }
					: item)
			}
			return [...items, { ...gun, quantity: 1 }]
		})
		setIsCartOpen(true)
	}

	const changeQuantity = (name, quantity) => {
		if (quantity < 1) {
			setCartItems((items) => items.filter((item) => item.name !== name))
			return
		}
		setCartItems((items) => items.map((item) => item.name === name ? { ...item, quantity } : item))
	}

	const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

	return (
		<div className="shell">
			<Header
				tab={tab}
				onTab={setTab}
				theme={theme}
				onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				cartCount={totalItems}
				onOpenCart={() => setIsCartOpen(true)}
			/>
			<main className="main">
				{tab === 'Catalog' && <Catalog guns={GUNS} onAddToCart={addToCart} />}
				{tab === 'About' && <About />}
				{tab === 'Contact' && <Contact />}
			</main>
			<Footer />
			<div className={isCartOpen ? 'cart-backdrop is-open' : 'cart-backdrop'} onClick={() => setIsCartOpen(false)} />
			<CartDrawer
				items={cartItems}
				isOpen={isCartOpen}
				onClose={() => setIsCartOpen(false)}
				onChangeQuantity={changeQuantity}
				onRemove={(name) => changeQuantity(name, 0)}
			/>
		</div>
	)
}
export default App