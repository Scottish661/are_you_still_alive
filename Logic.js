function add(){
fetch("https://scottish661-flask-starter.wasmer.app/incress")
.then(response => response.text())
.then(data => {
 document.getElementById("count").textContent = data;
});
}