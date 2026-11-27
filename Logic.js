async function add(){
const info = await fetch("https://the-backend.wasmer.app/add",{
method: "POST"
})
const data = await info.json()
document.getElementById("count").textContent = data.count
}