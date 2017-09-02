var gr8 = require('gr8')
var recsst = require('recsst')

var customCss = `
	html, body {
		padding: 0;margin:0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body { font-family: monospace; }
	.mw1000{max-width:1000px;margin:0 auto;}
`

var css = gr8({
	fontSize: [2, 1.5, 1, 0.75, 0.5, 0.25],
	spacing: [0, 0.25, 0.5, 1, 2, 3, 4],
	lineHeight: [1, 1.4, 1.6],
	zIndex: [0, 1, 2, 3, 4],
	opacity: [0, 25, 50, 75, 100],
	unit: 'rem'
})

var output = [
	recsst.toString(),
	customCss,
	css.toString()
].join('\n')

process.stdout.write(output)