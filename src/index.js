var yo = require('yo-yo')

// components
var content = require('./components/content')
var blog = content()

var options = {
	per_page: 10,
	page: 0
}


fetch('https://timur.stdlib.com/are@dev')
.then(res => res.json())
.then(json => {
	// console.log(json)

	preparePosts(json.contents.reverse())
	// let newBlog = content(json.contents.reverse())
	// yo.update(blog, newBlog)
})

function preparePosts (posts) {
	options.content = posts
	setPosts(false)
	setTimeout(setPosts(true), 300)
	setTimeout(setPosts(true), 600)
}

function nextPosts (append=false) {
	options.page++
	let nextSet = options.content.slice(options.page * options.per_page - options.per_page, options.per_page * options.page)
	if (!append) options.loaded = nextSet
		else options.loaded = options.loaded.concat(nextSet)

	console.log(options)
}


function handleScroll () {
	const imgs = document.querySelectorAll('.img')
	checkImgs(imgs)
	document.addEventListener('scroll', e => {
		checkImgs(imgs)
	})
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

document.body.prepend(blog)

