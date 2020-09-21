/*
On startup, connect to the "ping_pong" app.
*/
var port, main;

if(typeof browser !== 'undefined'){
	main = browser;
}
else if(typeof chrome !== 'undefined'){
	main = chrome;
}
port = main.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
main.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
