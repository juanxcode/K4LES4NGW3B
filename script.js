document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const indicatorDots = document.querySelectorAll(".indicator-dot");
    const cardHeading = document.querySelector(".card-heading");
    const cardDescription = document.querySelector(".card-description");

    let currentCardIndex = 0;
    const cards = [
      {
        heading: "Heading 1",
        description: "Description 1",
        imageUrl: "path/to/image1.jpg",
      },
      {
        heading: "Heading 2",
        description: "Description 2",
        imageUrl: "path/to/image2.jpg",
      },
      {
        heading: "Heading 3",
        description: "Description 3",
        imageUrl: "path/to/image3.jpg",
      },
    ];

    function showCard(index) {
      const card = cards[index];
      cardHeading.textContent = card.heading;
      cardDescription.textContent = card.description;
      // Update card image background
      // cardImage.style.backgroundImage = `url(${card.imageUrl})`;
    }

    function setActiveIndicator(index) {
      indicatorDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function swipeLeft() {
      if (
