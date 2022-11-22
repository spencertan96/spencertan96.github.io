document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
})

function onHandleClick(handle) {
    const slider = handle.closest(".slider-container")
        .querySelector(".slider");
    console.log(slider);
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"));
    console.log(sliderIndex);
    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
    }
    else if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
    }
}