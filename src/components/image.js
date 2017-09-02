var yo = require('yo-yo')

module.exports = data => {
	return yo`
		<div class='mb2'>
			<img class='w100' src='${data.image.original.url}' alt='${data.title}' />
		</div>
	`
}