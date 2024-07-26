(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        switch ($targetButton.textContent) {
            case '+':$counter.textContent = currentCount + 1;
            break;
            case '+10':$counter.textContent = currentCount + 10;
            break;
            case '-':$counter.textContent = currentCount - 1;
            break;
            case '-10':$counter.textContent = currentCount - 10;
            break;
        }
    }


    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();