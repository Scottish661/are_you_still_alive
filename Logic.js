document.get.body.innerhtml`
   <!DOCTYPE html>
<html>
<body>
    <style>
   button {
    height: 100px;
    width: 1000px;
  }
    </style>
   <h1 id="count"> </h1>
<button onclick="add()"> 
    incress the amount 
    </button> 
</body>
</html>
`
function add(){
fetch("https://scottish661-flask-starter.wasmer.app/add",{
    method: "POST"
    })
.then( info => info.json())
.then ( info => {
document.getElementById("count").textContent = info.count
})
}