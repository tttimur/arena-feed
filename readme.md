Using stdlib as the microservice to get the request to arena

```js
const fetch = require('node-fetch')
const user = 'timur-js'
const channel_id = '91263'
const access_token = ''

module.exports = async () => {
	const response = await fetch(`https://api.are.na/v2/users/${user}/channels/${channel_id}?access_token=${access_token}`)
	const json = await response.json()

	return json
};
```