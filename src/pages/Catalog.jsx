import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
	const [query, setQuery] = useState('')
	const [typeFilter, setTypeFilter] = useState('All')
	const gunTypes = ['All', ...new Set(GUNS.map((gun) => gun.type))]
	const normalizedQuery = query.trim().toLowerCase()
	const filteredGuns = GUNS.filter((gun) => {
		const searchableText = `${gun.name} ${gun.type} ${gun.caliber}`.toLowerCase()
		const matchesQuery = searchableText.includes(normalizedQuery)
		const matchesType = typeFilter === 'All' || gun.type === typeFilter

		return matchesQuery && matchesType
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
					<label className="filter-field">
						<span className="sr-only">Filter by weapon type</span>
						<select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
							{gunTypes.map((type) => <option key={type} value={type}>{type}</option>)}
						</select>
					</label>
				</div>
				<div className="list-head">
					<h2>Current stock</h2>
					<span className="count">{filteredGuns.length} of {GUNS.length} pieces</span>
				</div>
				{filteredGuns.length > 0 ? (
					<ul className="stock">
						{filteredGuns.map((gun) => <GunCard key={gun.name} gun={gun} />)}
					</ul>
				) : (
					<p className="empty-state">No inventory matches that search.</p>
				)}
			</section>
		</>
	)
}

export default Catalog