function About() {
	return (
		<div className="page">
			<span className="eyebrow">THE IRON VAULT / OUR HISTORY</span>
			<h1 className="display">Built on steel, kept by hand.</h1>
			<p className="lede">
				The Iron Vault began in 1987 as a small workbench and a promise: every piece
				on the wall should earn its place there.
			</p>
			<div className="about-signal">
				<div><strong>38</strong><span>years of<br />craft</span></div>
				<div><strong>12</strong><span>carefully<br />selected pieces</span></div>
				<div><strong>01</strong><span>standard:<br />trust</span></div>
			</div>
			<div className="history">
				<article className="history-item">
					<span className="history-index">01</span>
					<span className="history-year">1987</span>
					<div>
						<h2>The first bench</h2>
						<p>Our founder, Elias Ward, opened a one-room shop on Range Road with a repair kit, a ledger, and six carefully chosen firearms.</p>
					</div>
				</article>
				<article className="history-item">
					<span className="history-index">02</span>
					<span className="history-year">2004</span>
					<div>
						<h2>A vault with a wider door</h2>
						<p>The shop grew through word of mouth. Collectors and first-time owners came for straight answers, practical guidance, and equipment that could be trusted.</p>
					</div>
				</article>
				<article className="history-item">
					<span className="history-index">03</span>
					<span className="history-year">Today</span>
					<div>
						<h2>Less noise, better hardware</h2>
						<p>We still keep the list short and the standards high. Each item is selected for its purpose, character, and place in the hands of a responsible owner.</p>
					</div>
				</article>
			</div>
			<section className="principles">
				<div>
					<span className="eyebrow">THE VAULT STANDARD</span>
					<h2 className="display">Good hardware. Clear answers.</h2>
				</div>
				<p>We keep the collection focused, the information honest, and every conversation grounded in responsible ownership.</p>
			</section>
		</div>
	)
}
export default About