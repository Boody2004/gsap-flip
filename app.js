gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelectorAll(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Turn navs blue
    gsap.to(links, { color: "#252525" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }

    // Wanna move the line
    // const state = Flip.getState(activeNav);
    // link.appendChild(document.getElementById(activeNav));
    // Flip.form(state, {
    //   duration: 1.25,
    //   absolute: true,
    //   ease: "elastic.out(1,0.50",
    // });
  });
});

// Card
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Get State
    const state = Flip.getState(cards);

    // Add the active class to the clicked one and add inactive to the others
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive");
      }
    });
    if (!isCardActive) card.classList.add("active");

    // Flip.form(state, {
    //   duration: 1,
    //   absolute: true,
    //   ease: "expo.out",
    // });
  });
});
