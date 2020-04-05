
function getSelector(element){
	return '#' + element.getAttribute('id');
}

function getValue(element){
}

function setValue(element, value){
}

/**
 * Процедура считывания значений из полей страницы
 * @return Array<([String, String])>
 * @property [*][0] - селектор
 * @property [*][1] - значение
 */
function getInputs(){
	let fields = Array.from(document.querySelectorAll('input,select,textarea');
	
	return fields.map((element)=>([getSelector(element), getValue(element)]);
}

/**
 * Процедура установки значений в поля страницы
 * @param commands : Array<([String, String])>
 * @param commands[*][0] - селектор
 * @param commands[*][1] - значение
 */
function setInputs(commands){
	commands.forEach(([selector, value])=>{
		let field = document.querySelector(selector);
		
		setValue(field, value);
	});
}

export default {getInputs, setInputs};