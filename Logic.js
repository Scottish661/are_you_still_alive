fetch("https://backend-scottish661.wasmer.app")
.then(response =>response.text())
.then(data => document.body.innerHTML = `<h1> ${data}`)