const $counter = document.getElementById("js-counter");

document.getElementById("js-button").addEventListener("click", () => {
    let correntCount = parseInt($counter.textContent);
    $counter.textContent = correntCount + 1;
});