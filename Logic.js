function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add")
.then(info => info.text())
.then(info => {
 document.getElementById("count").textContent = count

})
}