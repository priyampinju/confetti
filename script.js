const confettiBtn = document.querySelector(".confetti-button");
confettiBtn.addEventListener("click", () => {
confetti();
    const canvas = document.createElement("canvas");
    const container = document.getElementsByClassName("wrapper")[0];
    
    // set dimensions for canvas
    canvas.width = 600;
    canvas.height = 600;

    container.appendChild(canvas);
    
    // create confetti inside the canvas
    const confetti_btn = confetti.create(canvas);

    //remove canvas after confetti
    confetti_btn().then(() => container.removeChild(canvas));
});