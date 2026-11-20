function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add",{
    method: "POST"
    })
.then( info => info.json())
.then ( info => {
document.getElementById("count").textContent = info.count
})
}