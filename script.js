const inputCor = document.getElementById("cor");

inputCor.addEventListener("input", (event) => {
    document.body.style.backgroundColor = event.target.value;
});