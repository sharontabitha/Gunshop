const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab, theme, onToggleTheme, cartCount, onOpenCart }) {
  return (
    <header className="header">
      <span className="brand display">The Iron Vault</span>
      <nav className="nav">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <button className="cart-button" type="button" onClick={onOpenCart} aria-label={`Open cart with ${cartCount} items`}>
          Cart <span>{cartCount}</span>
        </button>
      </div>
    </header>
  )
}

export default Header