var yo = require('yo-yo')

module.exports = data => {
	return yo`
		<div class='mb2'>${data.content}</div>
	`
}