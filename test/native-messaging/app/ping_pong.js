const listener = require('./message-host.js');

function handleMessage (req) {
	//log.write(`req ${req}\n`);
    return 'pong';
}

listener(handleMessage);