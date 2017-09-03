var yo = require('yo-yo')

module.exports = data => {
	return yo`
		<div class='c12 dib img'>
			<img class='c12 vab' src='${data.image.original.url}' alt='${data.title}' />
		</div>
	`
}