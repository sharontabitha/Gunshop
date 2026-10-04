import { useState } from 'react'
import GunCard from '../components/GunCard.jsx'

function Catalog({ guns, onAddToCart }) {
	const [query, setQuery] = useState('')
	const [typeFilter, setTypeFilter] = useState('All')
	const [maxPrice, setMaxPrice] = useState('All')
	const [sortBy, setSortBy] = useState('featured')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const toggleSort = (field) => {
		setSortBy((currentSort) => {
			if (field === 'name') return currentSort === 'name-asc' ? 'name-desc' : 'name-asc'
			return currentSort === 'price-low' ? 'price-high' : 'price-low'
		})
	}
	const gunTypes = ['All', ...new Set(guns.map((gun) => gun.type))]
	const normalizedQuery = query.trim().toLowerCase()
	const filteredGuns = guns.filter((gun) => {
		const searchableText = `${gun.name} ${gun.type} ${gun.caliber}`.toLowerCase()
		const matchesQuery = searchableText.includes(normalizedQuery)
		const matchesType = typeFilter === 'All' || gun.type === typeFilter
		const matchesPrice = maxPrice === 'All' || gun.price <= Number(maxPrice)

		return matchesQuery && matchesType && matchesPrice
	})
	const sortedGuns = [...filteredGuns].sort((firstGun, secondGun) => {
		if (sortBy === 'price-low') return firstGun.price - secondGun.price
		if (sortBy === 'price-high') return secondGun.price - firstGun.price
		if (sortBy === 'name-asc') return firstGun.name.localeCompare(secondGun.name)
		if (sortBy === 'name-desc') return secondGun.name.localeCompare(firstGun.name)
		return guns.indexOf(firstGun) - guns.indexOf(secondGun)
	})

	return (
		<>
			<section className="masthead">
				<h1 className="display">Hardware, by the spec sheet.</h1>
				<p className="lede">
					A small armory of pistols, rifles, and shotguns. Every piece listed with its
					type, caliber, and price — nothing else.
				</p>
			</section>
			<section>
				<div className="catalog-toolbar">
					<label className="search-field">
						<span className="sr-only">Search inventory</span>
						<span className="search-icon" aria-hidden="true">⌕</span>
						<input
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Search by name or caliber"
						/>
					</label>
					<div className="filter-menu">
						<button
							className={isFilterOpen ? 'filter-toggle is-active' : 'filter-toggle'}
							type="button"
							onClick={() => setIsFilterOpen((open) => !open)}
							aria-expanded={isFilterOpen}
							aria-label="Open catalog filters"
						>
							<span aria-hidden="true">≡</span>
							<small>Filter</small>
						</button>
						{isFilterOpen && (
							<div className="filter-panel">
								<label className="filter-field">
									<span>Type</span>
									<select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
										{gunTypes.map((type) => <option key={type} value={type}>{type}</option>)}
									</select>
								</label>
								<label className="filter-field">
									<span>Price</span>
									<select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}>
										<option value="All">Any price</option>
										<option value="500">Under $500</option>
										<option value="1000">Under $1,000</option>
										<option value="2000">Under $2,000</option>
									</select>
								</label>
								<div className="filter-field">
									<span>Sort</span>
									<div className="sort-toggles">
										<button
											type="button"
											className={sortBy.startsWith('name-') ? 'sort-toggle is-active' : 'sort-toggle'}
											aria-pressed={sortBy.startsWith('name-')}
											onClick={() => toggleSort('name')}
										>
											Name {sortBy === 'name-desc' ? 'Z-A' : 'A-Z'}
										</button>
										<button
											type="button"
											className={sortBy.startsWith('price-') ? 'sort-toggle is-active' : 'sort-toggle'}
											aria-pressed={sortBy.startsWith('price-')}
											onClick={() => toggleSort('price')}
										>
											Price {sortBy === 'price-high' ? 'high-low' : 'low-high'}
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="list-head">
					<h2>Current stock</h2>
					<span className="count">{filteredGuns.length} of {guns.length} pieces</span>
				</div>
				{filteredGuns.length > 0 ? (
					<ul className="stock">
						{sortedGuns.map((gun) => <GunCard key={gun.name} gun={gun} onAddToCart={onAddToCart} />)}
					</ul>
				) : (
					<p className="empty-state">No inventory matches that search.</p>
				)}
			</section>
		</>
	)
}

export default Catalog