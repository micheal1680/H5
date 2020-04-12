function show() {
	getStuInf(function(data){
		let box = document.getElementById("box");
		box.innerHTML = data;
	});
}
