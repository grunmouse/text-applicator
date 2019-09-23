const protocol = require('native-messaging');


const sendMessage = protocol(handleMessage)

function handleMessage (req) {
	if (req.message === 'ping') {
		sendMessage({message: 'pong', body: 'hello from nodejs app'})
	}
	console.log(req);
}