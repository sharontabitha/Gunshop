function Contact() {
	return (
		<div className="page">
			<span className="eyebrow">THE IRON VAULT / CONTACT</span>
			<h1 className="display">Come by the shop.</h1>
			<p className="lede">Questions about the collection or a specific piece? Our desk is open during shop hours.</p>
			<div className="contact-list">
				<div className="contact-item">
					<span className="contact-label">Address</span>
					<strong>123 Range Road</strong>
					<span>Open Tuesday to Saturday, 10:00 to 18:00</span>
				</div>
				<div className="contact-item">
					<span className="contact-label">WhatsApp</span>
					<a href="https://wa.me/6289647424178" target="_blank" rel="noreferrer">+62 089647424178</a>
					<span>Message the shop desk directly</span>
				</div>
			</div>
		</div>
	)
}
export default Contact