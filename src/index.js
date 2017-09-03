var yo = require('yo-yo')
var blog = content()


var App = require('./model')

// components
var Image = require('./components/image')
var Text = require('./components/text')

function content (items=[]) {
	console.log(items)
	return yo`
		<main class='buddy px2 py2 mw1000'>
			${items.map(item => {
				if (item.class === 'Image') return Image(item)
					else if (item.class === 'Text') return Text(item)
			})}
		</main>
	`
}

// tbd 
// some small lazy loading cause images serve wild
function setup () {

}

function checkImgs (imgs) {
	imgs.forEach(el => {
		let img = el.querySelector('img')
		if (window.scrollY + window.innerHeight >= el.offsetTop && !el.classList.contains('served')) {
			el.classList.add('served')
			img.setAttribute('src', img.getAttribute('data-src'))
		}
	})
}

fetch('https://timur.stdlib.com/are@dev')
.then(res => res.json())
.then(json => {
	// console.log(json)

	let newBlog = content(json.contents.reverse())
	yo.update(blog, newBlog)
	App.setup()
})

document.body.prepend(blog)

