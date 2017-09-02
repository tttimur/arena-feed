var yo = require('yo-yo')
var blog = content()

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

fetch('https://timur.stdlib.com/are@dev')
.then(res => res.json())
.then(json => {
	// console.log(json)

	let newBlog = content(json.contents.reverse())
	yo.update(blog, newBlog)
})

document.body.prepend(blog)

