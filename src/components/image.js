var yo = require('yo-yo')

module.exports = data => {
	return yo`
		<div class='mb4 img'>
			<img class='w100' data-src='${data.image.original.url}' alt='${data.title}' />
		</div>
	`
}