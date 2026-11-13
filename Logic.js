const h = docuemnt.getElementById("h");
function add(){
fetch("https://scottish661-flask-starter.wasmer.app/incress")
.then(response => response.text())
.then(data => {
    document.body.innerHTML = `<h1> ${data} </h1>`});
    }