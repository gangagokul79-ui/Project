// Navigation function
function goToPlans() {
    window.location.href = "plans.html";
}

// Dropdown Logic
const searchInput = document.getElementById("searchInput");
const optionsList = document.getElementById("optionsList");
const selectedItems = document.getElementById("selectedItems");
const noResult = document.getElementById("noResult");

if (searchInput) {

let selectedValues = [];

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll("#optionsList li").forEach(function (item) {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = "";
            visibleCount++;
        } else {
            item.style.display = "none";
        }
    });

    noResult.style.display = visibleCount === 0 ? "block" : "none";
});

document.querySelectorAll("#optionsList li").forEach(function (item) {
    item.addEventListener("click", function () {

        if (!selectedValues.includes(item.textContent)) {
            selectedValues.push(item.textContent);

            const chip = document.createElement("div");
            chip.className = "chip";
            chip.innerHTML = `
                ${item.textContent}
                <span>&times;</span>
            `;

            chip.querySelector("span").addEventListener("click", function () {
                selectedItems.removeChild(chip);
                selectedValues = selectedValues.filter(val => val !== item.textContent);
            });

            selectedItems.appendChild(chip);
        }

    });
});

}