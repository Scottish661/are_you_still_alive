fetch("https://scottish661-python-server.wasmer.app")
.then(response => response.text())
.then(data => {
    document.body.innerHTML = `${data}`});