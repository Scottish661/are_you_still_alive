fetch("https://backend-scottish661.wasmer.app")
.then(response => response.text())
.then(data => {
    document.body.innerHTML = "FETCH WORKS: " + data;
})
.catch(error => {
    document.body.innerHTML = "FETCH ERROR: " + error;
});