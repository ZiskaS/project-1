window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => response.json())
    .then((data) => {
      const project = data.find((p) => p.uuid === id);

      if (project) {
        document.querySelector(".project-title h1").innerText = project.name;

        const descriptionElement = document.querySelector(
          ".project-title-2 .description"
        );
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("body-intro-medium");
        descriptionDiv.innerText = project.description;
        descriptionElement.appendChild(descriptionDiv);

        const completedOnElement = document.querySelector(
          ".project-title-2 .completed-on"
        );
        const completedOnDiv = document.createElement("div");
        completedOnDiv.classList.add("body-intro-medium");
        completedOnDiv.innerText = `Completed on: ${project.completed_on}`;
        completedOnElement.appendChild(completedOnDiv);

        const img = document.querySelector(".project-image img");
        img.src = project.image;
        img.alt = project.name;

        document.querySelector(".project-content p").innerHTML =
          project.content || "No content available.";
      } else {
        console.log("Project not found!");
        document.querySelector(".project-title h1").innerText =
          "Project not found!";
      }

      const otherProjects = data.filter((p) => p.uuid !== id).slice(0, 3);
      const container = document.getElementById("other-projects-container");

      otherProjects.forEach((p) => {
        const card = document.createElement("article");
        card.classList.add("project-card");
        card.innerHTML = `
          <a class="project-wrapper" href="./projects.html?id=${p.uuid}">
            <img class="img-project" src="${p.image}" alt="${p.name}" />
            <div class="project-inner-card">
              <h4 class="project-title">${p.name}</h4>
              <p class="project-description">${p.description}</p>
              <a class="learn-more" href="./projects.html?id=${p.uuid}">Learn more</a>
            </div>
          </a>
        `;
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error during loading project:", err);
    });
});
