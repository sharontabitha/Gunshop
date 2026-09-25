function Contact() {
	return (
		<div className="page">
			<span className="eyebrow">THE IRON VAULT / CONTACT</span>
			<h1 className="display">Come by the shop.</h1>
			<p className="lede">Questions about the collection or a specific piece? Our desk is open during shop hours.</p>
			<div className="contact-list">
				<div className="contact-item">
					<span className="contact-label">Address</span>
					<div>
						<strong>123 Range Road</strong>
						<span>North district, workshop entrance</span>
						<span>Open Tuesday to Saturday, 10:00 to 18:00</span>
					</div>
				</div>
				<div className="contact-item">
					<span className="contact-label">WhatsApp</span>
					<div>
						<a href="https://wa.me/6289647424178" target="_blank" rel="noreferrer">+62 089647424178</a>
						<span>Message the shop desk directly</span>
					</div>
				</div>
			</div>
			<div className="contact-cta">
				<div>
					<span className="eyebrow">READY TO TALK?</span>
					<h2 className="display">Ask the desk.</h2>
				</div>
				<a className="contact-button" href="https://wa.me/6289647424178" target="_blank" rel="noreferrer">Open WhatsApp <span aria-hidden="true">-&gt;</span></a>
			</div>
		</div>
	)
}
export default Contact