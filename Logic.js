function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add")
.then(info => info.text())
.then( {
 document.getElementById("count").textContent = count

})
}