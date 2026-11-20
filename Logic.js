function add() {
    fetch("https://scottish661-flask-starter.wasmer.app/add", {
        method: "POST"
    })
    .then(response => response.json())
    .then(info => {
        document.getElementById("count").textContent = info.count;
    })
    .catch(error => {
        console.error("Something went wrong:", error);
    });
}
