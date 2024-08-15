let btn_login = document.querySelector('.btn1');
let modal = document.querySelector("#testModal");
let closeModalButton = modal.querySelector(".close-modal");

btn_login.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
