function show(someFunction) {
    someFunction();//say()
}

function say(){
    console.log("xxxxx");
}

show(say);