var yo = require('yo-yo')

module.exports = data => {
	let title
	let info

	if (data.title) title = yo`<div class='fs2 mb1'>${data.title}</div>`

	return yo`
		<div class='mb2 fs1'>
			${title}
			<div class='fs1 pl2'>${data.content}</div>
		</div>
	`
}