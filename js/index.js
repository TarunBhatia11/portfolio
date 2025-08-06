const main = document.querySelector(".main");
const leftImg = document.querySelector(".left-part-section img");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Shrink background size
    let size = Math.max(350 - scrollY * 0.5, 150); // from 350px to 150px
    main.style.backgroundSize = `${size}px auto`;

    // Move background downward (parallax)
    main.style.backgroundPositionY = `${scrollY * 0.3}px`;

    // Stick effect when reaching circle
    const leftRect = leftImg.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();

    if (mainRect.bottom <= leftRect.bottom + 50) {
        main.style.position = "fixed";
        main.style.top = leftRect.top + "px";
        main.style.left = leftRect.left + "px";
        main.style.width = leftImg.offsetWidth + "px";
        main.style.height = leftImg.offsetHeight + "px";
        main.style.borderRadius = "50%";
        main.style.backgroundSize = "cover";
    } else {
        main.style.position = "relative";
        main.style.width = "100%";
        main.style.borderRadius = "0%";
    }
});
