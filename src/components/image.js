var yo = require('yo-yo')

module.exports = data => {
	return yo`
		<div class='c3 dib img'>
			<img class='c12' data-src='${data.image.original.url}' alt='${data.title}' />
		</div>
	`
}