const words = document.querySelectorAll(".scroller-word");

let activeIndex = 0;

function updateScroller() {
    words.forEach((word, index) => {
        word.classList.remove("active", "before", "after");

        if (index === activeIndex) {
            word.classList.add("active");
        } else if (index === activeIndex - 1) {
            word.classList.add("before");
        } else if (index === activeIndex + 1) {
            word.classList.add("after");
        }
    });
}

// Make words activate when user hovers over them
words.forEach((word, index) => {
    word.addEventListener("mouseenter", () => {
        activeIndex = index;
        updateScroller();
    });

    // Also works when tabbing with keyboard
    word.addEventListener("focus", () => {
        activeIndex = index;
        updateScroller();
    });
});

updateScroller();