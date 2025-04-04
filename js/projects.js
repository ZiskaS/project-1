window.addEventListener("DOMContentLoaded", function () {
  // Die ID aus der URL holen
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id"); // Der "id" Parameter in der URL

  // Die Daten vom API-Endpunkt holen
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => response.json())
    .then((data) => {
      // Das Projekt anhand der UUID (id) finden
      const project = data.find((p) => p.uuid === id);

      if (project) {
        // Die Projektinformationen in die Seite einfügen
        document.querySelector(".project-title h1").innerText = project.name;
        document.querySelector(".project-title-2 p:nth-child(1)").innerText =
          project.description;
        document.querySelector(
          ".project-title-2 p:nth-child(2)"
        ).innerText = `Completed on: ${project.completed_on}`;

        // Das Bild des Projekts einfügen
        const img = document.querySelector(".project-image img");
        img.src = project.image;
        img.alt = project.name;

        // Den Inhalt des Projekts einfügen
        document.querySelector(".project-content p").innerText =
          project.content || "No content available."; // Wenn kein Inhalt vorhanden, einen Fallback-Text zeigen
      } else {
        console.log("Projekt nicht gefunden!");
      }

      // Andere Projekte anzeigen
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
      console.error("Fehler beim Laden der Projekte:", err);
    });
});
