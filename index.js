document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const isExpanded = card.dataset.expanded === "true";
      if (!isExpanded) {
        card.classList.add("expanded");
        card.dataset.expanded = "true";
        gsap.to(card, {
          width: "90%",
          padding: "40px",
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(card.querySelector(".extra-content"), {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          delay: 0.2
        });
      } else {
        card.classList.remove("expanded");
        card.dataset.expanded = "false";
        gsap.to(card, {
          width: "45%",
          padding: "20px",
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(card.querySelector(".extra-content"), {
          height: 0,
          opacity: 0,
          duration: 0.3
        });
      }
    });
  });