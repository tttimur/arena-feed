const app = {
	setup : () => {
		const imgs = document.querySelectorAll('.img')
		app.checkImgs(imgs)
		document.addEventListener('scroll', e => {
			app.checkImgs(imgs)
		})
	},

	checkImgs : imgs => {
		imgs.forEach(el => {
			let img = el.querySelector('img')
			if (window.scrollY + window.innerHeight >= el.offsetTop && !el.classList.contains('served')) {
				el.classList.add('served')
				img.setAttribute('src', img.getAttribute('data-src'))
			}
		})
	}
}

module.exports = app