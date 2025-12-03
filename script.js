const searchArea = document.getElementById("searchArea");
const openBtn = document.getElementById("openSearch");
const closeBtn = document.getElementById("closeSearch");

openBtn.addEventListener("click", () => {
    searchArea.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    searchArea.style.display = "none";
});
