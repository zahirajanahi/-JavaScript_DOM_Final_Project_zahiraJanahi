let btn_login = document.querySelector('.btn1');
let modal = document.querySelector("#testModal");
let closeModalButton = modal.querySelector(".close-modal");
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")

let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")


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


//* testimonial carousel
let currentIndex = 0

const slideImage = (index , myBtn) => {
    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')


            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")


            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    })
}

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});


previousBtns.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});


containers.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
            nextBtn.click()
        }, 3000);
    }
});


containers.forEach(container => {
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});

//* menu
starters.addEventListener("click",()=>{
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    let a = document.querySelector(".change")
    a.textContent = "Starters"
})

breakfast.addEventListener("click",()=>{
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";

    let title = document.querySelector(".change")
    title.textContent = "Breakfast"
})
lunch.addEventListener("click",()=>{
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";

    let title = document.querySelector(".change")
    title.textContent = "Dinner"
})
dinner.addEventListener("click",()=>{
    document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
    document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";

    let title = document.querySelector(".change")
    title.textContent = "Lunch"
})

//*when the user click at the button the video start to play
document.addEventListener('DOMContentLoaded', function() {
    const addVideo = GLightbox({
      selector: '.addVideo'
    });
});

//*responsive
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const links = document.querySelector('.links');

    menuToggle.addEventListener('click', function () {
        links.classList.add('open-menu');
        closeMenu.style.display = 'block';
        menuToggle.style.display = 'none';
    });

    closeMenu.addEventListener('click', function () {
        links.classList.remove('open-menu');
        closeMenu.style.display = 'none';
        menuToggle.style.display = 'block';
    });
});

  