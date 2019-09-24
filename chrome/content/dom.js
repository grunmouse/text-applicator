
function getSelector(element){
	return '#' + element.getAttribute('id');
}

function getValue(element){
}

function setValue(element, value){
}

function getInputs(){
	let fields = Array.from(document.querySelectorAll('input,select,textarea');
	
	return fields.map((element)=>([getSelector(element), getValue(element)]);
}

function setInputs(commands){
	commands.forEach(([selector, value])=>{
		let field = document.querySelector(selector);
		
		setValue(field, value);
	});
}

export default {getInputs, setInputs};