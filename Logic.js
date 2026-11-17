function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add",{
    method: "POST"
})
.then(info => info.text())
.then(info => {
 document.getElementById("count").textContent = info
})
}