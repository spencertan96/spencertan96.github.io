document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
})

window.addEventListener("resize", (e) => {
    // Recalculate progress bar (whenever resize)

})

document.querySelectorAll(".progress-bar").forEach(
    (calculateProgressBar)
)

// reset progress bar and add appropriate number of bars
// based on --items-per-screen variable in ".slider" in css
function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".projects")
        .querySelector(".slider");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue("--items-per-screen"));
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"));
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
    for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement("div");
        barItem.classList.add("progress-item");
        if (i == sliderIndex) {
            barItem.classList.add("active");
        }
        progressBar.append(barItem);
    }
}

// On clicking left/right navigation buttons for Projects
// Update progress bar highlight
function onHandleClick(handle) {
    const progressBar = handle.closest(".projects")
        .querySelector(".progress-bar");
    const slider = handle.closest(".slider-container")
        .querySelector(".slider");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"));
    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        // update progress bar highlight
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
        // make right arrow appear
        let rightArrow = document.getElementById("rightArrow");
        let sliderContainer = handle.closest(".slider-container");
        rightArrow.style.display = "block";
        sliderContainer.querySelector(".right-handle").style.visibility = "visible";
        // make left arrow disappear when at end
        if (sliderIndex <= 1) {
            document.getElementById("leftArrow").style.display = "none";
            sliderContainer.querySelector(".left-handle").style.visibility = "hidden";
        }
    }
    else if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        // update progress bar highlight
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
        // make left arrow appear
        let leftArrow = document.getElementById("leftArrow");
        let sliderContainer = handle.closest(".slider-container");
        leftArrow.style.display = "block";
        sliderContainer.querySelector(".left-handle").style.visibility = "visible";
        // make right arrow disappear when at end
        if (sliderIndex >= 2) {
            document.getElementById("rightArrow").style.display = "none";
            sliderContainer.querySelector(".right-handle").style.visibility = "hidden";
        }
    }
}