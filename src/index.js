var yo = require('yo-yo')

// components
var content = require('./components/content')
var blog = content()

var options = {
	per_page: 17,
	page: 0,
	loading: false,
	over: false
}

fetch('https://timur.stdlib.com/are@dev')
.then(res => res.json())
.then(json => {
	// console.log(json)

	preparePosts(json.contents.reverse())
	handleScroll()
})

function preparePosts (posts) {
	options.content = posts
	options.total_pages = Math.ceil(posts.length / options.per_page)
	options.loading = true
	nextPosts()
}

function nextPosts (append=false) {
	if (options.loading && options.page !== options.total_pages) {
		console.log(options)
		options.page++
		let nextSet = options.content.slice(options.page * options.per_page - options.per_page, options.per_page * options.page)
		if (!append) options.loaded = nextSet
			else options.loaded = options.loaded.concat(nextSet)

		if (options.loaded === options.content) {
			options.over = true
			console.log('END')
			console.log(options)
		}

		options.loading = false
		let newBlog = content(options.loaded)
		yo.update(blog, newBlog)
	} else {
		return
	}
}


function handleScroll () {
	document.addEventListener('scroll', handleScrollNext)
}

function handleScrollNext () {
	let bodyH = document.body.clientHeight
	let winH = window.innerHeight
	let st = window.scrollY

	if (st + winH >= bodyH - 300 && !options.loading && options.page !== options.total_pages) {
		options.loading = true
		nextPosts(true)
	}

}



document.body.prepend(blog)

