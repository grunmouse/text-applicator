function loadFile(){
	var file = document.getElementById("myFile").files[0];
	
	var reader = new FileReader();
		reader.onload = function (e) {
		var textArea = document.getElementById("myTextArea");
		textArea.value = e.target.result;
	};
	reader.readAsText(file);
}