fetch("https://scottish661-flask-starter.wasmer.app")
.then(response => response.text())
.then(data => {
    document.body.innerHTML = `<h1> ${data} </h1>`});