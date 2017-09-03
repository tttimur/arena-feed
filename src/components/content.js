var yo = require('yo-yo')
var image_item = require('./image')
var text_item = require('./text')

module.exports = (items=[]) => {
	return yo`
		<main class='buddy px2 py2 mw1000'>
			${items.map(item => {
				if (item.class === 'Image') return image_item(item)
					else if (item.class === 'Text') return text_item(item)
			})}
		</main>
	`
}