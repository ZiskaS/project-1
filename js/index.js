window.onload = function () {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => response.json())
    .then((data) => {
      // Nur die ersten 3 Projekte holen
      const threeProjects = data.slice(0, 3);
      const container = document.getElementById("projects-container");

      threeProjects.forEach((project) => {
        const card = document.createElement("article");
        card.classList.add("project-card");
        card.innerHTML = `
            <a class="project-wrapper" href="./pages/projects?id=${project.uuid}">
              <img class="img-project" src="${project.image}" alt="${project.name}" />
              <div class="project-inner-card">
                <h4 class="project-title">${project.name}</h4>
                <p class="project-description capitalize">${project.description}</p>
                <a class="learn-more" href="./pages/projects?id=${project.uuid}">Learn more</a>
              </div>
            </a>
          `;
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Fehler beim Laden der Projekte:", err);
    });
};
