var yo = require('yo-yo')
var blog = content()

function content (items=[]) {
	console.log(items)
	return yo`
		<main class='buddy'>
			${items.map(item => {
				return image(item)
			})}
		</main>
	`
}

function image (data) {
	return yo`
		<div>
			<img class='w100' src='${data.image.original.url}' alt='${data.title}' />
		</div>
	`
}

fetch('https://timur.stdlib.com/are@dev')
.then(res => res.json())
.then(json => {
	// console.log(json)
	let newBlog = content(json.contents)
	yo.update(blog, newBlog)
})

document.body.prepend(blog)

