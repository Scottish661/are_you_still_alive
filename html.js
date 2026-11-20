document.body.innerHTML = `
    <h1 id="count">0</h1>
    <button id="add">Increase the amount</button>
`;
const button = document.getElementById("add");
button.addEventListener("click", add);
