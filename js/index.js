window.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.getElementById("projects-container");
      const recentProjects = data.slice(0, 3);
      recentProjects.forEach((project) => {
        const card = document.createElement("article");
        card.classList.add("project-card");
        card.innerHTML = `
          <a href="./pages/projects.html?id=${project.uuid}" class="project-wrapper">
            <img class="img-project" src="${project.image}" alt="${project.name}" />
            <div class="project-inner-card">
              <h4 class="project-title">${project.name}</h4>
              <p class="project-description">${project.description}</p>
            </div>
          </a>
        `;
        projectsContainer.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error during loading project:", err);
    });
});
