function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add",{
method: "POST"
})
.then(data => data.json())
.then(data => {
    document.getElementById("count").textContent = data.count
    })
}