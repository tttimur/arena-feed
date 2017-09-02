var bel = require('bel')

function brodie () {
	return bel`
		<div class='buddy'>
			Hi!
		</div>
	`
}

fetch('https://timur.stdlib.com/are@dev').then((res)=> res.json()).then(json=>console.log(json))


document.body.appendChild(brodie)