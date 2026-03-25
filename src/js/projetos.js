const siteProjectsData = window.SETIF_DATA || { event: {}, projects: [] };
const projectsEvent = siteProjectsData.event || {};
const projectItems = siteProjectsData.projects || [];
const projectGrid = document.querySelector("#projects-grid");
const projectModal = document.querySelector("#project-modal");
const projectsBrandLabel = document.querySelector("#projects-brand-label");

function getProjectsEditionYear() {
  const now = new Date();
  let target = new Date(
    now.getFullYear(),
    Math.max((projectsEvent.month || 10) - 1, 0),
    projectsEvent.day || 17,
    projectsEvent.hour || 8,
    projectsEvent.minute || 0,
    0
  );

  if (target <= now) {
    target = new Date(
      now.getFullYear() + 1,
      Math.max((projectsEvent.month || 10) - 1, 0),
      projectsEvent.day || 17,
      projectsEvent.hour || 8,
      projectsEvent.minute || 0,
      0
    );
  }

  return target.getFullYear();
}

function fillProjectModal(project) {
  if (!projectModal) return;

  const image = document.querySelector("#project-modal-image");
  const tag = document.querySelector("#project-modal-tag");
  const title = document.querySelector("#project-modal-title");
  const summary = document.querySelector("#project-modal-summary");
  const team = document.querySelector("#project-modal-team");
  const advisor = document.querySelector("#project-modal-advisor");
  const stack = document.querySelector("#project-modal-stack");
  const impact = document.querySelector("#project-modal-impact");
  const description = document.querySelector("#project-modal-description");

  if (image) {
    image.src = project.image;
    image.alt = project.title;
  }
  if (tag) tag.textContent = project.tag;
  if (title) title.textContent = project.title;
  if (summary) summary.textContent = project.summary;
  if (team) team.textContent = project.team.join(", ");
  if (advisor) advisor.textContent = project.advisor;
  if (stack) stack.textContent = project.stack.join(" • ");
  if (impact) impact.textContent = project.impact;
  if (description) description.textContent = project.description;
}

function openProjectModal(project) {
  fillProjectModal(project);
  projectModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = projectItems
    .map(
      (project) => `
        <article class="content-card is-clickable" data-project-id="${project.id}">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="card-body">
            <span class="pill">${project.tag}</span>
            <h2>${project.title}</h2>
            <p>${project.summary}</p>
            <strong>Equipe:</strong>
            <p>${project.team.join(", ")}</p>
            <div class="card-actions">
              <button class="card-button" type="button" data-project-open="${project.id}">Ver detalhes</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-project-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedProject = projectItems.find((project) => project.id === button.dataset.projectOpen);
      if (selectedProject) openProjectModal(selectedProject);
    });
  });

  document.querySelectorAll(".content-card.is-clickable").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;

      const selectedProject = projectItems.find((project) => project.id === card.dataset.projectId);
      if (selectedProject) openProjectModal(selectedProject);
    });
  });
}

function bindProjectModal() {
  document.querySelectorAll("[data-close-project-modal]").forEach((element) => {
    element.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
}

function updateBrandLabel() {
  if (!projectsBrandLabel) return;
  projectsBrandLabel.textContent = `Mostra de projetos | edição ${getProjectsEditionYear()}`;
}

renderProjects();
bindProjectModal();
updateBrandLabel();
