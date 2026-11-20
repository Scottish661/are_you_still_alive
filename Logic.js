
document.body.innerHTML = `
    <h1 id="count">0</h1>
    <button id="add">Increase the amount</button>
`;

const button = document.getElementById("add");

button.addEventListener("click", add);

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
