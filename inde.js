document.querySelectorAll(".faq-item h3").forEach((faqHeader) => {
	faqHeader.addEventListener("click", () => {
		const faqItem = faqHeader.parentElement;

		// Toggle 'active' class on the clicked item
		faqItem.classList.toggle("active");

		// Optional: Close other open items
		document.querySelectorAll(".faq-item").forEach((item) => {
			if (item !== faqItem) {
				item.classList.remove("active");
			}
		});
	});
});
