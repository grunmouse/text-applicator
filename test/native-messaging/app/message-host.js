
function host(handleMessage){
	var incoming, dataLen;
	process.stdin.on('readable', async () => {
		//log.write('read\n');
		var input = [];
		var chunk;
		while (chunk = process.stdin.read()) {
		  input.push(chunk);
		}
		input = Buffer.concat(input);
		//log.write(`input ${input.length}\n`);
		
		if(!dataLen){
			dataLen = input.readUInt32LE(0);
			if(input.length > 4){
				incoming = input.slice(4);
			}
		}
		else{
			if(!incoming){
				incoming = input;
			}
			else{
				incoming = Buffer.concat([incoming, input]);
			}
			
			if(incoming.length >= dataLen){
				let msg = incoming.slice(0, dataLen).toString();
				//log.write(`msg ${msg}\n`);
				incoming = undefined;
				dataLen = 0;
				let res = await handleMessage(JSON.parse(msg));
				if(!!res){
					sendMessage(JSON.stringify(res));
				}
			}
			
		}
		
	  })
}

function sendMessage (msg) {
	//log.write(`res ${msg}\n`);
    var buffer = Buffer.from(msg);

    var header = Buffer.alloc(4)
    header.writeUInt32LE(buffer.length, 0)

    var data = Buffer.concat([header, buffer]);
    process.stdout.write(header);
    process.stdout.write(buffer);
}

module.exports = host;